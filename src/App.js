import React, { useState, useEffect } from 'react';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem('tasks')) || []
  });

  const [filter, setFilter] = useState('all');

  JSON.parse(localStorage.getItem('tasks'))
    const handleAddTask = (taskContent) => {
    setTodos([...todos, { text: taskContent, completed: false }]);
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(todos))
  }, [todos]);

  const handleDelete = (index) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
  };

  const handleToggle = (index) => {
      const newTodos = [...todos];
      newTodos[index].completed = !newTodos[index].completed;
      setTodos(newTodos);
  };

  const filteredTodos = todos.filter((todo) => {
      if (filter === 'all') {
          return true;
      } else if (filter === 'completed') {
          return todo.completed;
      } else {
          return !todo.completed;
      }
  });

  return (
    <div className='container'>
      <h1>To do List</h1>
      <TaskForm addTask={handleAddTask} />
      <button className="button" data-cy="filter-btn-all" onClick={() => setFilter('all')}>Toutes les tâches</button>
      <button className="button" data-cy="filter-btn-done" onClick={() => setFilter('completed')}>Complétées</button>
      <button className="button" data-cy="filter-btn-undone" onClick={() => setFilter('uncompleted')}>Non complétées</button>
      <TaskList todos={filteredTodos} handleToggle={handleToggle} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
