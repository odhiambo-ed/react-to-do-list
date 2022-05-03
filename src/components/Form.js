import React, { useState } from 'react';

const Form = ({addTodo}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setInputValue({ title: inputValue, completed: false });
  };
  return (
    <form className="ui form" onSubmit={handleFormSubmit}>
      <div className="ui grid center aligned">
        <div className="row">
          <div className="column five wide">
            <input
              value={inputValue}
              onChange={handleInputChange}
              type="text"
            />
          </div>
          <div className="column one wide">
            <button className="ui button circular icon primary" type="submit"><i className="plus icon white" /></button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
