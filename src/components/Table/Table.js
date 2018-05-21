import React, { Component } from 'react';
import { node, bool, string } from 'prop-types';
import { Div, Span } from 'glamorous';

/* eslint-disable */
const uuidv4 = () =>
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    let r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
/* eslint-enable */

class Column extends Component {
  static propTypes = {
    children: node.isRequired,
  }

  render() {
    return <Span role="columnheader">{this.props.children}</Span>;
  }
}

/* eslint-disable react/no-multi-comp */
class Row extends Component {
  static propTypes = {
    children: node.isRequired,
  }

  render() {
    return (
      <Div role="rowgroup" width="100%">
        {this.props.children}
      </Div>
    );
  }
}

class Cell extends Component {
  static propTypes = {
    children: node.isRequired,
  }

  render() {
    return <Div role="cell">{this.props.children}</Div>;
  }
}

class Collapsible extends Component {
  static propTypes = {
    children: node.isRequired,
  }

  render() {
    return (
      <Div role="cell" aria-expanded>
        {this.props.children}
      </Div>
    );
  }
}

export default class Table extends Component {
  static propTypes = {
    label: string.isRequired,
    description: string.isRequired,
    children: node.isRequired,
  }

  static Column = Column

  static Row = Row

  static Cell = Cell

  constructor(props) {
    super(props);
    this.id = `table_${uuidv4()}`;
  }

  Columns = () => {
    const childrenArray = React.Children.toArray(this.props.children);
  }

  render() {
    const { label, description } = this.props;
    return (
      <Div display="flex" role="table" aria-label={label} aria-describedby={this.id}>
        <Div id={this.id}>{description}</Div>
        {this.props.children}
      </Div>
    );
  }
}
/* eslint-enable react/no-multi-comp */

// fixed row
// fixed columns
// is read only
// is toggle
// fix row width

/* eslint-disable */

// import Dt from 'aclui/components/dt/dt';
//
// export class DTExample extends Component {
//   render() {
//
//     return (
//       <Dt isDisabled={false} onResize={() => {}}>
//         <Dt.Column>Entities</Dt.Column>
//         <Dt.Column render={({ id, value }) => <input onChange={(event) => this.doShit(id, event.target.value) } type="text" value={value} />}>Impact</Dt.Column>
//         <Dt.Column render={({ id, value }) => <input onChange={(event) => this.doShit(id, event.target.value) } type="text" value={value} />}>Impact</Dt.Column>
//         <Dt.Column render={({ id, value }) => <input onChange={(event) => this.doShit(id, event.target.value) } type="text" value={value} />}>Impact</Dt.Column>
//
//         <Dt.Row>
//           <Dt.Data>Spain</Dt.Data>
//           <Dt.Data>{ 13 }</Dt.Data>
//           <Dt.Data>{ 20 }</Dt.Data>
//           <Dt.Data>{ 29 }</Dt.Data>
//
//           <Dt.Collapsible isCollapsed={false}>
//             Content for collapsible
//           </Dt.Collapsible>
//         </Dt.Row>
//
//       </Dt>
//     )
//   }
// }
