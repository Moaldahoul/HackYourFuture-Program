import React from "react";
import ReactDOM from "react-dom";

function App() {
  // writing using the function methods
  
  return (
    <div>
      <h1> Hello World</h1>
    </div>
  );
}

class App2 extends React.Component {
  // how to write the code using the class
  render() {
    return (
      <div>
        <h1> Hello <em>{this.props.name}</em> To ReactJs</h1>
        <App /> 
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <App />
    <App2 name = "Mohamed" />
  </div>,
  document.getElementById("root")
);
