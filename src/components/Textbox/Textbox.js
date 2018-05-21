import React, { Component } from 'react';
import { string, bool, func } from 'prop-types';
import g from 'glamorous';
import { getCursorOffset, setFocusOffset } from './helpers';

const Div = g.div(props => ({
  role: 'textbox',
  border: '1px solid #D1D5DA',
  minHeight: '1.2rem',
  color: props.value ? '#3f3d3c' : '#8a8a8a',
}));

class Textbox extends Component {
  static propTypes = {
    multiline: bool,
    value: string,
    placeHolder: string,
    onChange: func,
    onKeyEnter: func,
  }

  static defaultProps = {
    multiline: false,
    value: null,
    placeHolder: '',
    onChange: () => {},
  }

  constructor(props) {
    super(props);
    this.$element = React.createRef();
    this.state = {
      value: this.props.value,
    };
  }

  componentDidUpdate() {
    this.correctInputPosition();
  }

  get hasPlaceHolder() {
    if (this.state.value) {
      return false;
    }
    return true;
  }

  correctInputPosition() {
    const { current } = this.$element;
    if (current.childNodes[0]) {
      setFocusOffset(current.childNodes[0], this.state.cursorOffset);
    }
  }

  handleKeyDown = (event) => {
    // if (this.props.value) {
    //   event.preventDefault();
    // }

    // if it's not multiline shouldn't create a new line
    if (!this.props.multiline && event.key === 'Enter') {
      event.preventDefault();
    }

    // if the state value is empty let's remove the placeholder before
    // updating the state value
    if (!this.state.value) {
      this.$element.current.innerText = '';
    }
  }

  handleInput = () => {
    const { current: { innerText } } = this.$element;

    this.setState(() => ({ value: innerText, cursorOffset: getCursorOffset() }));
    this.props.onChange(innerText);
  }

  render() {
    return (
      <Div
        innerRef={this.$element}
        contentEditable
        aria-multiline={this.props.multiline}
        aria-label={this.props.placeHolder}
        {...this.props}
        onKeyDown={this.handleKeyDown}
        onInput={this.handleInput}
        suppressContentEditableWarning
        data-has-placeholder={this.hasPlaceHolder}
      >
        {this.state.value || this.props.placeHolder}
      </Div>
    );
  }
}

export default Textbox;
