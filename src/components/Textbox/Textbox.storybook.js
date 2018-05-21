import React from 'react';
import { storiesOf } from '@storybook/react';
import { Div } from 'glamorous';
import Layout from 'aqua/Layout';
import Textbox from './Textbox';

storiesOf('Textbox', module)
  .add('Simple textbox', () => (
    <Layout>
      <Layout.Column padding={32} basis="33%" borderRight="1px dashed #D1D5DA">
        <h2>HTML</h2>
        <input type="text" placeholder="ex. Dennis Ritchie" />
        <hr />
        <textarea defaultValue="here" />
      </Layout.Column>
      <Layout.Column basis="33%" padding={32} borderRight="1px dashed #D1D5DA">
        <h2>Aqua Accessible</h2>
        <Textbox value="zsilva" onChange={text => console.log(text)} placeHolder="ex. Dennis Ritchie" />
        <hr />
        <Textbox multiline value="ex. Dennis Ritchie" />
      </Layout.Column>
      <Layout.Column basis="33%" padding={32}>
        <h2>NO Accessible</h2>
        <Div contentEditable border="1px solid #D1D5DA" />
      </Layout.Column>
    </Layout>
  ));
