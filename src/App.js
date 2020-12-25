import logo from './logo.svg';
import './App.css';
// import { render } from '@testing-library/react';
import React from 'react' 

export default class App extends React.Component{
  componentDidMount=()=>{
    console.log("FIREBASE_API_KEY", process.env.FIREBASE_API_KEY)
  }

  render(){

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          Look24 :: Cloud Messaging Notification{process.env.FIREBASE_API_KEY}
        </p>
          
        </header>
      </div>
    )
  }
}

