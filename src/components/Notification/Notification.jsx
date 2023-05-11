import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Notification.module.css';

export class Notification extends Component {
  render() {
    const title = this.props.title;
    return (
      <>
        <p className={css.notification}>{title}</p>
      </>
    );
  }
}

Notification.propTypes = {
  title: PropTypes.string.isRequired,
};
