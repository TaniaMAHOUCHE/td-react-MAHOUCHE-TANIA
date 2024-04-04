import React, { useState } from 'react';
import '../App.css';

const TaskForm = ({ addTask }) => {
    const [inputTask, setInputTask] = useState('');

    const handleChange = (e) => {
        setInputTask(e.target.value);
    };

    const handleSubmit = () => {
        if (inputTask.trim() !== '') {
            addTask(inputTask);
            setInputTask('');
        }
    };

    return (
        <div id="className='container">
            <form data-cy="task-form">
                <input className = "input-field" data-cy="task-input" type="text" value={inputTask} onChange={handleChange} />
                <button className="button" data-cy="add-task-btn" onClick={handleSubmit}>Add Todo</button>
            </form>
        </div>
    );
};

export default TaskForm;
