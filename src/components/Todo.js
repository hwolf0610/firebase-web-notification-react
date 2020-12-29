import React from 'react';
import firebase from '../utils/firebase';
import '../App.css';

export default function Todo({ todo }) {

    const completeTodo = () => {
        const todoRef = firebase.database().ref('Todo').child(todo.id);
        todoRef.update({
            complete: !todo.complete,
        });
    };

    const deleteTodo = () => {
        const todoRef = firebase.database().ref('Todo').child(todo.id);
        todoRef.remove();
    };

    return (
        <tr>
            <td><h1 className={todo.complete ? 'complete' : ''}>{todo.title}</h1></td>
            <td><button onClick={deleteTodo}>Delete</button></td>
            <td><button onClick={completeTodo}>Complete</button></td>
        </tr>
    );
}