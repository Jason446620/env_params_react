import React from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
  var testValue="";
  if(process.env.NODE_ENV === "production")
    {
        testValue= "proEnv"+process.env.REACT_APP_TITLE ;
    }
    else if(process.env.NODE_ENV === "development")
    {
      testValue="devEnv";
      process.env.REACT_APP_TITLE = "test";
    }
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          <code>process.env.REACT_APP_TITLE=</code>{testValue} +{process.env.REACT_APP_TITLE}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
