import React, { Component } from 'react';
import {Link, Route, Switch } from 'react-router-dom';
import About from './About';
import TodoApp from './todos';
import UserProfile from './UserProfile';
import RepoProfile from './RepoProfile';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Hello World </h2>
        <ul>
          <li><Link to ='/about'>About </Link></li>
          <li><Link to ='/Todos'>Todo </Link></li>
        </ul>
        <Switch>
        <Route exact path = "/about" component={About} /> 
        <Route exact path = "/Todos" component={TodoApp} />
        <Route exact path = "/:username" component={UserProfile} />
        <Route exact path = "/:username/:repo" component={RepoProfile} />
        {/* <Route path = "/Todos/:id/:id2" component={TodoApp} />
        <Route path = "/Todos/:userId" component={Profile} />
        <Route path = "/:userId" component={()=>{ // userId is dynamec and it match everything(every value) so it won't render anything after it
          return <h2> Profile </h2>
        }} /> */}
        </Switch>
        
      </div>
    );
  }
}

export default App;
