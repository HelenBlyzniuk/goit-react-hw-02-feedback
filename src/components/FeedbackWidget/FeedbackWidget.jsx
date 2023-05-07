import React, { Component } from 'react';
import css from './FeedbackWidget.module.css';

import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';

import { Statistics } from '../Statistics/Statistics';
const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export class FeedbackWidget extends Component {
  state = {
    ...INITIAL_STATE,
  };

  clickHandle = e => {
    const name = e.currentTarget.name;

    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = ({ good, neutral, bad } = this.state) => {
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = ({ good, neutral, bad } = this.state) => {
    const total = good + neutral + bad;
    const positiveTotal = Math.round((good / total) * 100);
    return positiveTotal;
  };

  render() {
    return (
      <div className={css.widget}>
        <FeedbackOptions clickHandle={this.clickHandle} />

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
          state={this.state}
          initialState={INITIAL_STATE}
        />
      </div>
    );
  }
}
