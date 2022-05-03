import React, { useState } from 'react';

const Todo = ({ title, completed }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(title);
  const [tempValue, setTempValue] = useState(title);
  const [completedState, setCompleted] = useState(completed);

  const handleDivDoubleClick = () => {
    setIsEditing(true);
  };

  const handleInputKeyDown = (e) => {
    const key = e.keyCode;

    if (key === 13) {
      setInputValue(tempValue);
      setIsEditing(false);
    } else if (key === 27) {
      setTempValue(inputValue);
      setIsEditing(false);
    }
  };

  const handleInputChange = (e) => {
    setTempValue(e.target.value);
  };

  const handleButtonCompleteClick = () => {
    setCompleted((oldCompleted) => !oldCompleted);
  };

  return (
    isEditing
      ? (
        <div className="row">
          <div className="column six wide">
            <div className="ui input fluid">
              <input
                onKeyDown={handleInputKeyDown}
                onChange={handleInputChange}
                autoFocus={false}
                value={tempValue}
              />
            </div>
          </div>
        </div>
      )
      : (
        <div className="row">
          <div className="column five wide" onDoubleClick={handleDivDoubleClick}>
            <h3>
              <span className={`ui header${completedState ? ' complete' : ''}`}>
                {inputValue}
              </span>
            </h3>
          </div>
          <div className="column one wide">
            <button
              className={`ui button circular icon${completedState ? ' gray' : ' green'}`}
              onClick={handleButtonCompleteClick}
            >
              <i className="check icon white" />
            </button>
          </div>
          <div className="column one wide">
            <button className="ui button circular icon red"><i className="remove icon white" /></button>
          </div>
        </div>
      )
  );
};

export default Todo;
