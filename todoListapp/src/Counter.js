import React from "react";
import PropTypes from 'prop-types';

export default class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = { Counter: props.initialCounter};
    }

    componentDidMount(){
        this.intervalId = setInterval(()=>{
            this.setState({Counter: this.state.Counter + 1})
        }, this.props.updateInterval);
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    render(){
        return(
            <div>
                Counter : {this.state.Counter} per seconds
                <div className = 'children'>
                    {this.props.children}
                </div>

            </div>
        );
    }
}

Counter.PropTypes = {
    initialCounter: PropTypes.number.isRequired,
    updateInterval: PropTypes.number.isRequired,
}