import React, { Component } from 'react';

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export class FeedbackWidget extends Component {
  state = {
    ...INITIAL_STATE,
  };

  clickGoodHandle = () => {
    // const name = e.currentTarget.name;

    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  clickNeutralHandle = () => {
    // const name = e.currentTarget.name;
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  clickBadHandle = () => {
    // const name = e.currentTarget.name;
    this.setState(prevState => ({
      bad: prevState.bad + 1,
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
      <>
        <ul className="controlButtons">
          <li className="controlButton">
            <button type="button" name="good" onClick={this.clickGoodHandle}>
              Good
            </button>
          </li>
          <li className="controlButton">
            <button
              type="button"
              name="neutral"
              onClick={this.clickNeutralHandle}
            >
              Neutral
            </button>
          </li>
          <li className="controlButton">
            <button type="button" name="bad" onClick={this.clickBadHandle}>
              Bad
            </button>
          </li>
        </ul>
        <>
          <h2 className="statisticsTitle">Statistics:</h2>
        </>
        {JSON.stringify(this.state) === JSON.stringify(INITIAL_STATE) && (
          <p className="notification">There is no feedback</p>
        )}

        {JSON.stringify(this.state) !== JSON.stringify(INITIAL_STATE) && (
          <ul className="statistics">
            <li className="statisticsItem">Good: {this.state.good}</li>
            <li className="statisticsItem">Neutral:{this.state.neutral}</li>
            <li className="statisticsItem">Bad:{this.state.bad}</li>
            <li className="statisticsItem">
              Total:{this.countTotalFeedback()}
            </li>
            <li className="statisticsItem">
              Positive feedback: {this.countPositiveFeedbackPercentage()} %
            </li>
          </ul>
        )}
      </>
    );
  }
}
