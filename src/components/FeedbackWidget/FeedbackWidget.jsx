import React, { Component } from 'react';
import css from './FeedbackWidget.module.css';

export class FeedbackWidget extends Component {
  render() {
    const children = this.props.children;
    return (
      <section className={css.widget} title="feedbackWidget">
        <h1 className={css.widget_title}>Please leave feedback</h1>
        {children}
      </section>
    );
  }
}
