import React from 'react';
import '../App.css';

const TaskList = ({ todos, handleToggle, handleDelete }) => {
    return (
        <div data-cy="task-list" className='container'>
            <ul>
                {todos.map((todo, index) => (
                    <li className={todo.completed ? 'completed' : '' }  data-cy="task-item" key={index}>
                        <span>
                            {todo.text}
                        </span>
                        <button className="button" onClick={() => handleToggle(index)}>
                            {todo.completed ? 'Uncompleted' : 'Complete'}
                        </button>
                        <button className="button-delete" onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
