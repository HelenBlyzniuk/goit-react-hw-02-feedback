import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import css from './FeedbackOptions.module.css';

export class FeedbackOptions extends Component {
  render() {
    const clickHandle = this.props.clickHandle;
    const options = this.props.options;

    return (
      <ul className={css.control_buttons}>
        {options.map(btn => (
          <li className={css.control_button} key={nanoid()}>
            <button
              className={css.control_btn}
              type="button"
              name="good"
              onClick={clickHandle}
            >
              {btn}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

FeedbackOptions.propTypes = {
  clickHandle: PropTypes.func.isRequired,
};
