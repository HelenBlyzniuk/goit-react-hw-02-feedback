import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './FeedbackOptions.module.css';

export class FeedbackOptions extends Component {
  render() {
    const clickHandle = this.props.clickHandle;
    return (
      <ul className={css.control_buttons}>
        <li className={css.control_button}>
          <button
            className={css.control_btn}
            type="button"
            name="good"
            onClick={clickHandle}
          >
            Good
          </button>
        </li>
        <li className={css.control_button}>
          <button
            className={css.control_btn}
            type="button"
            name="neutral"
            onClick={clickHandle}
          >
            Neutral
          </button>
        </li>
        <li className={css.control_button}>
          <button
            className={css.control_btn}
            type="button"
            name="bad"
            onClick={clickHandle}
          >
            Bad
          </button>
        </li>
      </ul>
    );
  }
}

FeedbackOptions.propTypes = {
  clickHandle: PropTypes.func.isRequired,
};
