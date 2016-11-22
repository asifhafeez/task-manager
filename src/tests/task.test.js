import React, { Component } from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import App from './../App';
import Task from './../Task';

const renderer = ReactTestUtils.createRenderer();
renderer.render(<Task description='Visit Japan!' />, 'div');
const result = renderer.getRenderOutput();

it('shows a task description', () => {
  expect(result.props.children).toContain('Visit Japan!');
});

it('can mark a task as done', () => {
  expect(result.props.children).not.toContain("is done");
  const node = result.find('.button');
  ReactTestUtils.Simulate.click(node);
  expect(result.props.children).toContain("is done");
});
