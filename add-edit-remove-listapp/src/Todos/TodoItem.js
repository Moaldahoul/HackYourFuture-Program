import React from 'react';
import PropTypes from 'prop-types';
export default class TodoItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            edit: false,
            editText : this.props.todo.text,
        }
        this.switchMode = this.switchMode.bind(this);
        this.finishEdit = this.finishEdit.bind(this);
        this.changeEditText = this.changeEditText.bind(this);
    }

    updateFocus(){
        if(this.state.edit) {
            this.editInput.focus();
        }
    }

    switchMode(){
        // this.setState({ edit: this.state.edit });
        this.setState((state)=>{
            return { edit: !state.edit};
        }, ()=>{
            // this.state.edit   
            this.updateFocus();
        });
    }

    finishEdit(){
        this.setState((state)=>{
            return { edit: !state.edit};
        },  ()=>{
            // console.log(state);
            this.updateFocus();   
        });
        const newItem = {...this.props.todo, text: this.state.editText };
        this.props.updateTodoItem(this.props.todoId, newItem);
    }

    changeEditText(event){
        this.setState({ editText: event.target.value });
    }

    render() {
        const { todoId, todo, updateTodoItem, removeTodoItem } = this.props;
        return this.state.edit ? 
                <input 
                    ref = {editInput => this.editInput = editInput}
                    value ={ this.state.editText } 
                    onChange = { this.changeEditText}
                    onBlur = {this.finishEdit} />
                :
                 <li >
                    <span onClick ={ this.switchMode }
                        className ={ todo.done 
                        ? 'checked' : 'unchecked' } >
                        { todo.text }
                    </span>
                    <input 
                        type = 'checkbox' 
                        value = {todo.done} 
                        onChange={()=>{
                        console.log(todoId);
                        const newItem = {...todo, done: !todo.done };
                        updateTodoItem(todoId, newItem );
                        }} 
                        />
                    {/* <button onClick ={this.props.removeTodoItem}>Remove</button> */}
                    <button onClick ={()=>removeTodoItem(todoId ) }>
                        Remove
                    </button>
                </li> 
            }
        }


TodoItem.propTypes = {
    todoId: PropTypes.string.isRequired,
    todo: PropTypes.shape({
        done: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired,
    updateTodoItem: PropTypes.func.isRequired,
};