/* eslint-disable react/prop-types */
import React, {useState} from 'react';

const TodoForm = ({addTask}) => {

  const [userInputText, setUserInputText] = useState(``);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTask(userInputText.trim());
    setUserInputText(``);
  };

  const handleChange = ({target}) => {
    setUserInputText(target.value);
  };

  const handleKeyDown = (evt) => {
    if (evt.key === 'Enter') {
      handleSubmit(evt);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter next task"
        value={userInputText}
        onChange={handleChange}
        onKeyDown={handleKeyDown} />

      <button>Save</button>
    </form>
  );
};

export default TodoForm;
