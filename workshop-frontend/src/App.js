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
      <footer className="App-footer">
        Coded with <span className="sr-only">love</span>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/kajol-kumari-73245b166/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/_Kajol_singh_" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://github.com/Kajol-Kumari" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
