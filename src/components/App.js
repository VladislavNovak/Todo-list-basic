import React, {useState} from 'react';
import '../assets/styles.css';
import {nextTodoId} from '../utils/auxilliary';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

function App() {

  const [todos, setTodos] = useState([]);

  const handleRemoveTask = (id) => {
    const temps = todos.filter(todo => todo.id !== id);

    setTodos([...temps]);
  };

  const handleToggleTask = (id) => {
    const temps = todos.map(todo => (
      todo.id === id ? ({...todo, completed: !todo.completed}) : ({...todo})
    ));

    setTodos([...temps]);
  };

  const handleAddTask = (userInputText) => {
    if (userInputText) {
      const newTask = {
        id: nextTodoId(todos),
        task: userInputText,
        completed: false,
      };

      setTodos([...todos, newTask]);
    }
  };

  return (
    <div className="App">
      <header>Tasks: {todos.length}</header>
      <TodoForm
        addTask={handleAddTask} />
      {todos.map(todo => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            removeTask={handleRemoveTask}
            toggleTask={handleToggleTask} />
        );
      })}
    </div>
  );
}

export default App;
