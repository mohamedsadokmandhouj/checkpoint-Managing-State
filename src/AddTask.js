import React, { useContext, useState } from 'react';
import { TodoContext } from './todoContext';
import './App.css';  // Ensure to import CSS

const AddTask = () => {
    const { addNewTodo } = useContext(TodoContext);

    const [input, setInput] = useState({
        description: ""
    });

    const handleChangeInput = (e) => {
        setInput({ description: e.target.value });
    };

    return (
        <div className="add-task-container">
            <label className="add-task-label">Add your new task:</label>
            <input type="text" className="add-task-input" onChange={handleChangeInput} />
            <button className="add-task-button" onClick={() => addNewTodo(input)} >
                Add new task
            </button>
        </div>
    );
};

export default AddTask;
