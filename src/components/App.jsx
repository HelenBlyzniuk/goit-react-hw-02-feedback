import React, { Component } from 'react';
import { FeedbackWidget } from './FeedbackWidget/FeedbackWidget';

// const INITIAL_STATE = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
// };

export class App extends Component {
  // state = {
  //   ...INITIAL_STATE,
  // };

  render() {
    return (
      <div style={{ display: 'block', width: '100wv', paddingTop: 50 }}>
        <FeedbackWidget
        // good={this.state.good}
        // bad={this.state.bad}
        // neutral={this.state.neutral}
        />
      </div>
    );
  }
}
