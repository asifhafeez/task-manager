import React, { Component } from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import App from './../App';
import Task from './../Task';
import TaskList from './../TaskList';

it("creates a list of task", () => {
  const renderer = ReactTestUtils.createRenderer();
  renderer.render(< TaskList />, 'div');
  const result = renderer.getRenderOutput();
  expect(result.props.children[2].props.description).toContain("Buy Mary some chocolates");
  expect(result.props.children.length).toEqual(3);
});
