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

    return (
      <>
        <ul className={css.statistics}>
          <li className="statisticsItem">Good: {good}</li>
          <li className="statisticsItem">Neutral: {neutral}</li>
          <li className="statisticsItem">Bad: {bad}</li>
          <li className="statisticsItem">Total: {total}</li>
          <li className="statisticsItem">
            Positive feedback: {positivePercentage} %
          </li>
        </ul>
      </>
    );
  }
}

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
