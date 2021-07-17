const express = require('express');
const Data = require('./model/data');
const cors = require('cors');
const http = require('http');
require('./middleware/db');
require('dotenv').config();
const User = require('./model/user');
const {auth} = require('./middleware/auth');
var cookies = require("cookie-parser");

const app = express();
const server = http.Server(app);

// CORS
app.use(cors());

// Body Parser
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookies());


// Home route
app.get('/', (_req, res) => {
  res.status(200).json({ message: 'Hello There!! You are at the backend server!' });
});


// adding new user (sign-up route)
app.post('/api/register',function(req,res){
    // taking a user
    const newuser=new User(req.body);
    
   if(newuser.password!=newuser.confirm_password)return res.status(400).json({message: "password not match"});
    
    User.findOne({email:newuser.email},function(err,user){
        if(user) return res.status(400).json({ auth : false, message :"email exits"});
 
        newuser.save((err,doc)=>{
            if(err) {console.log(err);
                return res.status(400).json({ success : false});}
            res.status(200).json({
                succes:true,
                user : doc
            });
        });
    });
 });


 // login user
app.post('/api/login', function(req,res){
    let token = req.cookies.auth;
    User.findByToken(token,(err,user)=>{
        if(err) return  res(err);
        if(user) return res.status(400).json({
            error :true,
            message:"You are already logged in"
        });
    
        else{
            User.findOne({'email':req.body.email},function(err,user){
                if(!user) return res.json({isAuth : false, message : 'Auth failed ,email not found'});
        
                user.comparepassword(req.body.password,(err,isMatch)=>{
                    if(!isMatch) return res.json({ isAuth : false,message : "password doesn't match"});
        
                user.generateToken((err,user)=>{
                    if(err) return res.status(400).send(err);
                    res.cookie('auth',user.token).json({
                        isAuth : true,
                        id : user._id,
                        email : user.email,
                        token: user.token
                    });
                });    
            });
          });
        }
    });
});

// get logged in user detailc
app.get('/api/profile',auth,function(req,res){
    res.json({
        isAuth: true,
        id: req.user._id,
        email: req.user.email,
        name: req.user.firstname + req.user.lastname
    })
});

//logout user
app.get('/api/logout',auth,function(req,res){
    req.user.deleteToken(req.token,(err,user)=>{
        if(err) return res.status(400).send(err);
        res.sendStatus(200).json({'message': 'Logged Out Successfully!'});
    });

}); 

// Route for getting details
app.get('/user/get-details', async(_req, res) => {
    const data = await Data.find();
    res.status(200).send(data);
});

// Route to create an item
app.post('/user/add-user', auth, async(_req, res) => {
  const data = await Data.create(_req.body);
  res.status(200).send(data);
});

// Route to delete an item
app.delete('/user/delete-user/:_id', auth, async(_req, res) => {
  var _id = _req.params._id;
  const data = await Data.findOneAndDelete({_id:_id});
  res.status(200).send(data);
});

// Route to update an item
app.patch('/user/update-user/:_id', auth, async(_req, res) => {
  var _id = _req.params._id;
  const data = await Data.findOneAndUpdate({_id  : _id}, {$set: _req.body});
  res.status(200).send(data);
})

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(
  PORT,
  console.log(`Server running in ${process.env.ENV || 'development'} mode on port ${PORT}`)
);

// handle the error safely
process.on('uncaughtException', (err) => {
  console.log(err);
});

module.exports = app;
