import './App.css';
import DataList from './components/data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="./home_img.png" className="App-logo" alt="logo" />
        <p>
        <code>Welcome to API 2.0 Workshop!</code>
        </p>
        <a
          className="App-link"
          href="https://www.postman.com/student-program/student-leader/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Register for Postman Student Leader Program!!
        </a>
      </header>
      <body className="App-body">
        <DataList />
      </body>
    </div>
  );
}

export default App;
