import React from 'react';
import { storiesOf } from '@storybook/react';
import Layout from 'aqua/Layout';
import List, { Item } from './List';

storiesOf('List', module).add('Simple List', () => (
  <Layout>
    <Layout.Column padding={32} basis="33%" borderRight="1px dashed #D1D5DA">
      <h2>HTML</h2>
      <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </ul>
    </Layout.Column>
    <Layout.Column basis="33%" padding={32} borderRight="1px dashed #D1D5DA">
      <h2>Aqua Accessible</h2>
      <List>
        <Item>one</Item>
        <Item>two</Item>
        <Item>three</Item>
      </List>
    </Layout.Column>
    <Layout.Column basis="33%" padding={32}>
      <h2>NO Accessible</h2>
      <div>
        <span>one</span>
        <span>two</span>
        <span>three</span>
      </div>
    </Layout.Column>
  </Layout>
));
