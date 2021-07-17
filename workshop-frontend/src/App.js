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
          href="https://studentsummit21.eventbrite.com/?aff=KK-44"
          target="_blank"
          rel="noopener noreferrer"
        >
          Register for Postman Student Summit!!
        </a>
      </header>
      <body className="App-body">
        <DataList />
      </body>
    </div>
  );
}

export default App;
