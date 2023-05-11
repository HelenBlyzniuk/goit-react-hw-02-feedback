import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export class App extends Component {
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
    const { good, neutral, bad } = this.state;

    return (
      <div style={{ display: 'block', width: '100wv', paddingTop: 50 }}>
        <Section title="Please, leave feedback">
          <FeedbackOptions
            clickHandle={this.clickHandle}
            options={Object.keys(this.state)}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification title="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
