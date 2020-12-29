import logo from './logo.svg';
import './App.css';
import React from 'react'
import Routes from './Routes';

import Form from './Firebase_RealtimeDatabase/form';
import TodoList from './Firebase_RealtimeDatabase/TodoList';

export default class App extends React.Component {
  componentDidMount = () => {
    // console.log("FIREBASE_API_KEY", process.env.REACT_APP_API_KEY, SERVER_URL, process.env)
    // console.log(process.env.REACT_APP_CLIENT_ID); console.log(process.env.REACT_APP_KEY);
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <hr />
        <Routes /> 

        <hr />
        <h1>Firebase Realtime Database CRUD Dashboard</h1>
        <div >
          <h1>Todo</h1>
          <Form />
          <TodoList />
        </div>
        <hr />

      </div>
    )
  }
}

