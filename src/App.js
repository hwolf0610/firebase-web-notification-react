import logo from './logo.svg';
import './App.css';
import React from 'react'
import Routes from './Routes';


export default class App extends React.Component {
  componentDidMount = () => {
    // console.log("FIREBASE_API_KEY", process.env.REACT_APP_API_KEY, SERVER_URL, process.env)
    // console.log(process.env.REACT_APP_CLIENT_ID); console.log(process.env.REACT_APP_KEY);
    window.apikey = process.env.REACT_APP_API_KEY;
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <hr />
        <Routes /> 
      </div>
    )
  }
}

