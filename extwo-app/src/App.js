import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem'

const arr = [];
if(localStorage.getItem('todo')){

}else{
  localStorage.setItem('todo', JSON.stringify(arr));
}


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todo: JSON.parse(localStorage.getItem('todo')),
      activityType: "",
      date: ""
    };
    this.addNewActivity = this.addNewActivity.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.toSetDate = this.toSetDate.bind(this);
  }

  toSetDate(){
    const firstDate = new Date();
    const secondDate = new Date(this.state.date);
    if (secondDate.getTime()< firstDate.getTime()) return 1;
    const timeDiff = Math.abs(secondDate.getTime() - firstDate.getTime());
    const days = Math.ceil(timeDiff/(1000* 3600 * 24));
    return days;
  }

  addNewActivity(){
    if(this.state.date === undefined || this.state.activityType=== " ");
    if(this.toSetDate()=== 1) return "You should insert the date";
    const activityType = this.state.activityType;
    const date = this.toSetDate();
    const newArr = { activity: activityType, date: date};
    const adjArr = [...this.state.todo, newArr];
    localStorage.setItem('todo', JSON.stringify(adjArr))
    this.setState({
      todo:JSON.parse(localStorage.getItem('todo')), 
      date:"", 
      activityType:"", 
      done:""
    });

  }

  removeItem(){
    if(this.state.todo.length < 0) return "No Item Left";
    localStorage.setItem('todo', JSON.stringify(arr))
    this.setState({todo: JSON.parse(localStorage.getItem('todo'))});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
            <h2>Add New Activity</h2>
            <label>Activity type:</label>
            <input 
              className = 'ActivityInput' 
              onChange = {event => {
                this.setState({ activityType : event.target.value});
              }}
              type = "text"
              value = {this.state.activityType}  
            />
            <br/>
            <label> Date: </label>
            <input 
              className = 'ActivityInput'
              onChange = {event => {
                this.setState({ date : event.target.value});
              }}
              type = "date"
              value = {this.state.date}  
            />



            <button className = "AddToList"
            onClick = {this.addNewActivity}> Add New Activity </button>
          </div>

          <div>
            <h2>Your Todo List Items: </h2>
            <ul>
              
            {this.state.todo < 1 
                    ? 'There is No Items'
                    :this.state.todo.map((obj, id) => (
                            <ListItem 
                                obj = {obj} 
                                id = {id} 
                                date ={this.state.date}
                                />
                        ))
                    }
            </ul>
            <button className ='removeList' onClick = {this.removeItem}> Remove All Items</button>
          </div>
      </div>
    );
  }
}

export default App;
