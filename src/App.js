import React, {useState} from 'react';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {

  const [todos, setTodos] = useState([]);

  const handleRemoveTask = () => {

  };

  const handleToggleTask = () => {

  };

  const handleAddTask = (userInputText) => {
    if (userInputText.trim()) {
      const newTask = {
        id: Math.random().toString(36).substr(2,9),
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
      {todos.map((todo) => {
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
