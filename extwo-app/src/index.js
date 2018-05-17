import React from 'react';
import ReactDOM from 'react-dom';
import AppList from './AppList';
import TodoList from "./TodoList";

const AppContent =() => (
    <div>
        <TodoList/>
        <AppList/>
    </div>
);


ReactDOM.render(<AppContent />, 
    document.getElementById('root'));
