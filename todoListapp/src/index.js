import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Counter from './Counter';

ReactDOM.render(
    <div>
        <App />
        <Counter initialCounter = {5} uupdateInterval = {500}/>
    </div>,
document.getElementById('root'));

