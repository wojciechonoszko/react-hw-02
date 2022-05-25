import React, { Component } from 'react';


class Feedback extends Component {

    
  
    static defaultProps = {
        step: 1,
        initialValue: 0,
      };

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        valueItems: [],
        value: this.props.initialValue,
    };

    handleIncrement = (evt) => {
        console.log(this.state.value)
        console.log("Increment button was clicked!", evt); // działa
        console.log("this.props: ", this.props); // Error: cannot read props of undefined
        this.setState((state, props) => ({
            value: state.value + props.step,
            good: state.good + props.step,
            neutral: state.neutral + props.step,
            bad: state.bad + props.step,
        }))
        //console.log(this.state.value)
      }
    
    handleClick = evt => {
        console.log(evt, this.props)
      };
    render() {
        const { step } = this.props;

        return (
            <>
            <h2>Please leave feedback</h2>
            <button
            type="button"
            onClick={this.handleIncrement}
            >
            Good
            </button>
            <button
            type="button"
            onClick={this.handleIncrement}>Neutral</button>
            <button
            type="button"
            onClick={this.handleIncrement}
            >Bad</button>
            <h3>Statistics</h3>
            <div>Good: {this.state.value}</div>
            <div>Neutral: {this.state.neutral}</div>
            <div>Bad: {this.state.bad}</div>
            </>
        );
    }
    
};

export {Feedback};