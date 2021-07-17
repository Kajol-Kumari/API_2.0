import React, { Component } from 'react';
import axios from 'axios';
import UserDetail from './user';

class DataList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      details: [],
      errMsg: ''
    }
  }

  componentDidMount() {
    axios.get('https://api-workshop-backend.herokuapp.com/user/get-details')
      .then(res => {
        console.log(res);
        this.setState({ details: res.data })
      })
      .catch(err => {
        console.log(err);
        this.setState({ errMsg: 'Error Retrieving the data!' });
      })
  }

  render() {
    return (
      <div>
        <code><span class="heading">Users Message!</span></code>
        <div className="wrapper">
          {this.state.details.map((user) => (
            <UserDetail details={user} />
          ))}
        </div>
      </div>
    )
  }
}

export default DataList;
