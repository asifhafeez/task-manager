import React, { Component } from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import App from '../App';
import Task from '../Task';

it('shows a task description', () => {
  const renderer = ReactTestUtils.createRenderer();
  renderer.render(<Task description='Visit Japan!' />, 'div');
  const result = renderer.getRenderOutput();
  expect(result.props.children).toContain('Visit Japan!');
});

it('can mark a task as done', function () {
  const testDoc = ReactTestUtils.renderIntoDocument(<Task description='Visit Japan!' />);
  const button = ReactTestUtils.scryRenderedDOMComponentsWithClass(testDoc, "button");
  expect(testDoc.state.status).not.toContain("is done");
  ReactTestUtils.Simulate.click(button[0]);
  expect(testDoc.state.status).toContain("is done");
});
