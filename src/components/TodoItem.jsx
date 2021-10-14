/* eslint-disable react/prop-types */
import React from 'react';

const TodoItem = ({todo, toggleTask, removeTask}) => {

  const {id, task} = todo;

  return (
    <div>
      <div
        onClick={() => toggleTask(id)}>{task}</div>
      <div
        onClick={() => removeTask(id)}>X</div>
    </div>
  );
};

export default TodoItem;
