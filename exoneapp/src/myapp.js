import React from 'react';
import TodoList from './todoList';

function ListTask (props) {
    return (
    
        <ul className = "DecList">
          {props.items.map(function(items){
            return <TodoList items = {items}/>;
          })}
        </ul> 

    );
}
export default ListTask;


