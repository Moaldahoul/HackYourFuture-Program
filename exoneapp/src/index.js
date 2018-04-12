import React from 'react';
import {render} from 'react-dom';
import ListTask from './myapp';
import './index.css';
import Owner from './ftr';

function list() {
    return [
  { description : "Get out of bed" , deadline : "Wed Sep 13 2017"}, 
  { description : "Brush teeth", deadline : "Thu Sep 14 2017"}, 
  { description : "Eat breakfast", deadline :"Fri Sep 15 2017"},
  { description : "Study Study Running Study", deadline :"Fri Sep 15 2017"}
    ];   
}

const FristApp = props => (
    <div className = "appList">
        <h1> {props.headerTitle}</h1>
        <ListTask items = {list()} />
        <ftr />
    </div>
)


render(<FristApp headerTitle = "Daily Tasks : " />, 
document.getElementById('root')
);
