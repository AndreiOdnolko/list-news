import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { increment } from '../AC'

class Counter extends Component {
  static propTypes = {
    counter: PropTypes.number
  }
  render() {
    const { counter, increment } = this.props;
    return(
      <>
        <h2>{counter}</h2>
        <button onClick = {increment}>Increment</button>
      </>
    )
  }
}

export default connect(({ count }) => ({
  counter: count
}), { increment })(Counter)