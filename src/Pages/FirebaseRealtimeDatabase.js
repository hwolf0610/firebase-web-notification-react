import React from 'react'; 

import Form from '../Firebase_RealtimeDatabase/form';
import TodoList from '../Firebase_RealtimeDatabase/TodoList';

function FirebaseRealtimeDatabase(){
    return(
        <div>
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
export default FirebaseRealtimeDatabase;