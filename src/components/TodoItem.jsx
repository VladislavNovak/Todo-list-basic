/* eslint-disable react/prop-types */
import React from 'react';

const TodoItem = ({todo, toggleTask, removeTask}) => {

  const {id, task} = todo;

  return (
    <div className="item-todo">
      <div
        className={todo.completed ? "item-text strike" : "item-text"}
        onClick={() => toggleTask(id)}>{task}</div>
      <div
        className="item-delete"
        onClick={() => removeTask(id)}>&#10060;</div>
    </div>
  );
};

export default TodoItem;
