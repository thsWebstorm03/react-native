'use strict';

import React, { Component } from 'react';
import CalculatorStore from '../stores/CalculatorStore';

function getCalculatorState() {
  return {
    displayScreen: CalculatorStore.getDisplayScreen()
  };
}

class Screen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayScreen: CalculatorStore.getDisplayScreen()
    };

    // Bind callback methods to make `this` the correct context.
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    CalculatorStore.addChangeListener(this._onChange);
  };

  componentWillUnmount() {
    CalculatorStore.removeChangeListener(this._onChange);
  };

  render() {
    return (
      <div className='screen'>
        {this.state.displayScreen}
      </div>
    );
  };

  _onChange() {
    this.setState(getCalculatorState());
  }
}

module.exports = Screen;
