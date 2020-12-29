import React, { useState, useEffect } from 'react';
import firebase from '../utils/firebase';
import Todo from './Todo';

export default function TodoList() {
    const [todoList, setTodoList] = useState();

    useEffect(() => {
        const todoRef = firebase.database().ref('Todo');
        todoRef.on('value', (snapshot) => {
            const todos = snapshot.val();
            const todoList = [];
            for (let id in todos) {
                todoList.push({ id, ...todos[id] });
            }
            setTodoList(todoList);
        });
    }, []);

    return (
        <div>
            <table border="1" width="100%">
                <tr>
                    <td>Title</td>
                    <td>Delete Action</td>
                    <td>Complete Action</td>
                </tr>
                {todoList
                    ? todoList.map((todo, index) => <Todo todo={todo} key={index} />)
                    : ''}
            </table>
        </div>

    );
}