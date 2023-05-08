import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './Statistics.module.css';

export class Statistics extends Component {
  render() {
    const good = this.props.good;
    const neutral = this.props.neutral;
    const bad = this.props.bad;
    const total = this.props.total;
    const positivePercentage = this.props.positivePercentage;
    const state = this.props.state;
    const initialState = this.props.initialState;
    return (
      <>
        <h2 className={css.statistics_title}>Statistics:</h2>
        {JSON.stringify(state) === JSON.stringify(initialState) && (
          <p className={css.notification}>There is no feedback</p>
        )}

        {JSON.stringify(state) !== JSON.stringify(initialState) && (
          <ul className={css.statistics}>
            <li className="statisticsItem">Good: {good}</li>
            <li className="statisticsItem">Neutral: {neutral}</li>
            <li className="statisticsItem">Bad: {bad}</li>
            <li className="statisticsItem">Total: {total}</li>
            <li className="statisticsItem">
              Positive feedback: {positivePercentage} %
            </li>
          </ul>
        )}
      </>
    );
  }
}

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  initialState: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  positivePercentage: PropTypes.number.isRequired,
};
