import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default class TodoListManger extends React.Component {
    constructor(props){
        super(props);
        this.todoId = 0;
        this.state = {
            todoText: '',
            todoItems: {},// when we represent the todo List you put array with objects or better to create an object with other objects and (id) inside it
        };
        this.updateTodoText = this.updateTodoText.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.undateTodoItem = this.undateTodoItem.bind(this);


    }

    updateTodoText(event){ // the event is an object so we can destructure it in different form:  updateTodoText({target:{value}}) { this.setState({value})}        
        this.setState({todoText: event.target.value});
    }

   addTodo(event){
       const {todoText, todoItems} = this.state;
       const item = { text: todoText, done: false};
       const newId = `id ${this.todoId++}`;
       const newTodoItems = {...todoItems, [newId]: item };
       this.setState({ todoItems: newTodoItems, todoText: '' });
        
   }

   undateTodoItem(itemId) {
       const oldItem = this.state.todoItems[itemId];
       const newItem = {...oldItem, done: !oldItem.done };
       const newTodoItems = { ...this.state.todoItems, [itemId]: newItem};
       this.setState({todoItems: newTodoItems});
   }

    render(){
        const {state: {todoText, todoItems}, updateTodoText, addTodo, undateTodoItem} = this;
        // const {todoText} = this.state;

        return(
            <div>
                <TodoForm 
                    inputValue ={todoText} 
                    updateTodoText = {updateTodoText}
                    addTodo ={addTodo}
                    />
                <TodoList 
                    todos = {todoItems}
                    undateTodoItem={undateTodoItem}
                    />
            </div>
        );
    }
}

