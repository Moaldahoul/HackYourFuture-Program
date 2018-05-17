import React, { Component } from 'react';
import TodoListManger from './Todos/TodoListManger';


class App extends Component {
  render() {
    return (
      <div className="AppClass">
          <TodoListManger />
        
        <br/>
        
      </div>
    );
  }
}

export default App;
