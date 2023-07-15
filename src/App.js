import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to Dan's List!
        </p>
        <div>
          <form action='http://localhost:3000/authenticate' method='post'>
            <div className='loginBox'>
              <div className='loginCombo'>
                <label className='loginLabel' for='username'>Username:</label>
                <input style={{ marginLeft: '0.25rem' }} type='text' id='username' name='username' />
              </div>
              <div className='loginCombo'>
                <label className='loginLabel' for='password'>Password:</label>
                <input style={{ marginLeft: '0.25rem' }} type='password' id='password' name='password' />
              </div>
              <input type='submit' value='Submit' />
            </div>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;