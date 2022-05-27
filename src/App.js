import {React, Component} from 'react';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Statistic from './statistic/Statistic';




class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  options = Object.keys(this.state);

  /*   constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0
    };
    this.options = Object.keys(this.state);
    //this.onLeaveFeedback = this.onLeaveFeedback.bind(this);
  } */

  onLeaveFeedback = event => {
    const option = event.target.dataset.option;
    this.setState(prevState => ({[option]: prevState[option] + 1}));
  };

  getTotal() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.options}
            onLeaveFeedback={this.onLeaveFeedback}
          />

        </Section>
        <Section title="Statistics">
          {this.getTotal() ? (
            <Statistics
            options={this.options}
            feedback={this.state}
            total={this.getTotal()}
            positivePercentage={
              this.getTotal() !== 0
              ? Math.round((this.state.good / this.getTotal()) * 100)
              : 0
            }
            ></Statistics>
          ):(
            <Notification message = "No feedback given"></Notification>
          )}
        </Section>
      </>
    );
  }
}

export default App;