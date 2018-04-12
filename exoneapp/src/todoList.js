import React from 'react';

class TodoList extends React.Component{
    render() {
        return (
            <li>
                <span> Description: {this.props.items.description}</span>
                <span> Deadline : {this.props.items.deadline} </span>
            </li>
    
    );
    }
}

export default TodoList;