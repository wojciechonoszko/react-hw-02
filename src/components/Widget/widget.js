import React, { Component } from 'react';
import {Statistics} from '../Statistics/Statistics.js';


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
        percentage: 0,
        valueItems: [],
        value: this.props.initialValue,
    };
    
      handleIncrementGood = evt => {
        this.setState((state, props) => ({
            good: state.good + props.step,
        }));
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
      };   
      handleIncrementNeutral = evt => {
        this.setState((state, props) => ({
            neutral: state.neutral + props.step,
            
        }));
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
      } ;  
      handleIncrementBad = evt => {
        this.setState((state, props) => ({
            bad: state.bad + props.step,
        }));
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
      } ;  
      
      countTotalFeedback = evt => {
        this.setState((state, props) => ({
            total: state.bad + state.neutral + state.good,
        }
        ))
        console.log(this.state.total)
      } ; 
      
      countPositiveFeedbackPercentage = () => {
            this.setState((state, props) => ({
                percentage: Math.round(state.good/ state.total*100),
            }
            ))
        console.log(this.state.percentage)
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
            <h3>Statistics</h3>
            <div>Good: {this.state.good}</div>
            <div>Neutral: {this.state.neutral}</div>
            <div>Bad: {this.state.bad}</div>
            <div>Total: {this.state.total}</div>
            <div>Positive feedback: {this.state.percentage}%</div>
            
            </>
        );
    }
    
};

export {Feedback};