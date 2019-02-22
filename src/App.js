import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from"./components/TodoList";

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        hello from app component
        <TodoInput />
        <TodoList />
      </div>
    );
  }
}

export default App;
