'use strict';

import Render from './KeyboardRender'

import React, { Component } from 'react';

export default class Keyboard extends Component {
  render () {
    return Render.call(this, this.props, this.state);
  }
}
