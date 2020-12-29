import React, { useState } from 'react';
import firebase from '../utils/firebase';

export default function Form() {
    const [title, setTitle] = useState('');

    const handleOnChange = (e) => {
        setTitle(e.target.value);
    };
    const createTodo = () => {
        const todoRef = firebase.database().ref('Todo');
        const todo = {
            title,
            complete: false,
        };

        todoRef.push(todo);
    };

    // const createUsers = () => {
    //     const todoRef = firebase.database().ref('MessagingUsers');
    //     const todo = {
    //         username:'noseted',
    //         deviceToken:'null',
    //         notificationStatus: false,
    //     };

    //     todoRef.push(todo);
    // };

    return (
        <div>
            <input type="text" onChange={handleOnChange} value={title} />
            <button onClick={createTodo}>Add Todo</button>
            {/* <button onClick={createUsers}>Add Firebase Message Users Realtime Database</button> */}
        </div>
    );
}