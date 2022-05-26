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
        total: 0,
        valueItems: [],
        value: this.props.initialValue,
    };

    // handleIncrement = (evt) => {
    //     console.log(this.state.value)
    //     console.log("Increment button was clicked!", evt); // działa
    //     console.log("this.props: ", this.props); // Error: cannot read props of undefined
    //     this.setState((state, props) => ({
    //         value: state.value + props.step,
    //         good: state.good + props.step,
    //         neutral: state.neutral + props.step,
    //         bad: state.bad + props.step,
    //     }))
    //     //console.log(this.state.value)
    //   }
    
      handleIncrementGood = evt => {
        this.setState((state, props) => ({
            good: state.good + props.step,
        }))
      };   
      handleIncrementNeutral = evt => {
        this.setState((state, props) => ({
            neutral: state.neutral + props.step,
            
        }))
      } ;  
      handleIncrementBad = evt => {
        this.setState((state, props) => ({
            bad: state.bad + props.step,
        }))
      } ;  

      countTotalFeedback = evt => {
        this.setState((state, props) => ({
            total: state.bad + state.neutral + state.good,
        }
        ))
        console.log(this.state.total)
      } ; 
      
      
    
    render() {
        const { step } = this.props;
        
        return (
            <>
            <h2>Please leave feedback</h2>
            <button
            type="button"
            onClick={this.handleIncrementGood}
            
            >
            Good
            </button>
            <button
            type="button"
            onClick={this.handleIncrementNeutral}>Neutral</button>
            <button
            type="button"
            onClick={this.handleIncrementBad}
            >Bad</button>
            <button
            type="button"
            onClick={this.countTotalFeedback}
            >Count</button>
            <h3>Statistics</h3>
            <div>Good: {this.state.good}</div>
            <div>Neutral: {this.state.neutral}</div>
            <div>Bad: {this.state.bad}</div>
            <div>Total: {this.state.total}</div>
            <div>Positive feedback: </div>
            </>
        );
    }
    
};

export {Feedback};