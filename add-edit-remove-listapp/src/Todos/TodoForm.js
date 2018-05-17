import React from 'react';
import propTypes from 'prop-types';

export default function TodoForm(props){
        const {inputValue, updateTodoText, addTodo} = props
        return(
            <div>
                <input type = 'text' 
                value = {inputValue} 
                onChange = {updateTodoText}
                />
            <button onClick ={addTodo}> Add </button>   
            </div>
        );
    }

TodoForm.propTypes = {
    inputValue: propTypes.string.isRequired,
    updateTodoText: propTypes.func.isRequired,
    addTodo: propTypes.func.isRequired, 
}; 