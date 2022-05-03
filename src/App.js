import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import Section from './components/Section';

const appTitle = 'Edward To-Do List App';

const list = [
  { title: 'Todo test #1', completed: false },
  { title: 'Todo test #2', completed: false },
  { title: 'Todo test #3', completed: false },
  { title: 'Todo test #4', completed: false },
];

const App = () => {
  const [todoList, setTodoList] = useState(list);

  const addTodo = (item) => {
    setTodoList((oldList) => [...oldList, item]);
  };
  return (
    <div className="ui container center aligned">
      <Section>
        <h1>{appTitle}</h1>
      </Section>
      <Section>
        <Form addTodo={addTodo} />
      </Section>
      <Section>
        <List list={todoList} />
      </Section>
    </div>
  );
};

export default App;
