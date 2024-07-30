import React, { useContext } from 'react';
import { TodoContext } from './todoContext';
import './App.css';

const TodoList = () => {
    const { todos, deleteTodo, toggleTodoStatus } = useContext(TodoContext);

    return (
        <div>
            {todos.map((el) => (
                <div key={el.id} className={`todo-item ${el.status === "done" ? "done" : ""}`}  >
                    <div className="todo-content">
                        <div className="todo-description" onClick={() => toggleTodoStatus(el.id)}  >
                            <h1>{el.description}</h1>
                        </div>
                        <span className={`status-icon ${el.status === "done" ? "done" : ""}`} onClick={() => toggleTodoStatus(el.id)} >
                            {el.status === "done" ? "✘ " : "✔"}
                        </span>
                    </div>
                    <span className="delete-icon" onClick={() => deleteTodo(el.id)} >
                        <button className='delete-icon'>Delete task</button>
                    </span>
                </div>
            ))}
        </div>
    );
};

export default TodoList;


