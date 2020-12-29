import logo from './logo.svg';
import './App.css';
// import { render } from '@testing-library/react';
import React from 'react'

import PushMessaging from './Firebase/PushMessaging'

import Form from './components/form';
import TodoList from './components/TodoList';

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
        <h1>Notification Message Dashboard</h1>
        <PushMessaging />
        <hr />

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

