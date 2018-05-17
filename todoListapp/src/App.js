import React, { Component } from 'react';
import TodoList from "./TodoList";
import Counter from "./Counter";
import TodoListManger from './TodoListManger';


class App extends Component {
  render() {
    return (
      <div className="AppClass">
        <div>
          <TodoListManger />
        </div>
        <h1>Hello World</h1>
        <TodoList />
        <br/>
        <Counter initialCounter = {5} uupdateInterval = {500}>
          <div>
            Hello from the Counter
          </div>
        </Counter >
      </div>
    );
  }
}

export default App;
