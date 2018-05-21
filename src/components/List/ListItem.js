import React, { Component } from 'react';
import { node } from 'prop-types';
import { Div } from 'glamorous';

export default class List extends Component {
  static propTypes = {
    children: node.isRequired,
  }

  render() {
    return (
      <Div {...this.props} role="listitem">
        {this.props.children}
      </Div>
    );
  }
}
