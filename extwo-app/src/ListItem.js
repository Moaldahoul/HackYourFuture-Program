import React from 'react';

function ListItem(props) {
    return (
        <li 
            key = {props.id} makeTime = {props.date}>
            {props.obj.activity}, Time {" "}
        
      <span> 
            {props.obj.date} 
      </span> 
      Days. { "\u00A0 \u00A0 \u00A0" }
      </li>
        
    );
}

export default ListItem;