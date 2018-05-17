import React from "react";


class TodoList extends React.Component {
    constructor(props){
        super(props); // including super() before state{} in the constructor()
        this.secret = '43534234';
        this.counter = 1;
        // this.itemNum = 1;
        this.state = {
            todos  : [
                // ['hello', 0], //[this.itemNum++,'hello', 0],
                // ['todo stuff', 1],
                // ['things todo', 2],
            ],
            text: '',
        }; 
        
        this.addButtonClickHandler = this.addButtonClickHandler.bind(this);
        this.removeButtonClickHandler = this.removeButtonClickHandler.bind(this);
        console.log('initializing the component');
            
    }

    componentWillMount(){
        console.log('component will mount(before)');
    }

    
    addButtonClickHandler() {
        
        if(this.state.text === '') return;
        
        console.log('add clicked', this.secret); // for test it 's working
        const newItem = [`${this.counter} ${this.state.text} `, this.counter++];
        const todos = this.state.todos;
        const newTodos = [...todos, newItem];
        // const newTodos = todos.concat([newItem]);
        this.setState({todos : newTodos});
        }

    removeButtonClickHandler(){
        console.log('Removed clicked', this.secret);    
    }

    render(){
        console.log('rendering');
        
        return(
            <div>
                <input 
                placeholder = {'Todo Items'} 
                //ref ={(inputElem)=> this.myInput = inputElem}
                onChange = {(event)=>{
                    this.setState({ text: event.target.value})
                    
                }}
                // value = {this.state.text} 
                />
                <button onClick = {this.addButtonClickHandler}> Add Items</button>
                
                <ul>
            
                    {this.state.todos < 1 
                    ? <p>There is No Items</p>
                    :this.state.todos.map(([text, id]) => {
                        return <li key = {id} > {text} </li>
                        })
                    }
                </ul>
                <button onClick = {this.removeButtonClickHandler}> Remove All Items</button>
            </div>
        );
    }
    componentDidMount(){
        console.log('component did mount(after)')
    }

    componentWillUnmount(){
        console.log('component will Unmount(remove item)');
      
    }
}

    
export default TodoList;