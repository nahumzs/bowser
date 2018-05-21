import React, { Component } from 'react';
import { string } from 'prop-types';
import { Div } from 'glamorous';
import './index.css';

class Layout extends Component {
  static Column = (props) => (<Div flexBasis={props.basis} {...props}>{props.children}</Div>);

  render() {
    return (
      <Div margin="0" padding="0" display="flex" height="100vh">
        {this.props.children}
      </Div>
    );
  }
}

export default Layout;
