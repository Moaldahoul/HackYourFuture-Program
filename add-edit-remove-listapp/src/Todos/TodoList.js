import React from "react";
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
    render(){
        const keys = Object.keys(this.props.todos);
        return(
            <ul>
                {
                  keys.map((key)=>{
                    const todo =  this.props.todos[key];
                    return (
                        <TodoItem 
                            key={key} 
                            todo ={todo} 
                            todoId ={key}
                            updateTodoItem ={ this.props.updateTodoItem }
                            // removeTodoItem  = {()=>{this.props.removeTodoItem(key)}}
                            removeTodoItem = { this.props.removeTodoItem }
                        />
                        );
                  })  
                }
            </ul>
        );
    }
}
