import React, { Component } from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import App from './../components/App/App';
import Task from './../components/App/Task';
import TaskList from './../components/App/TaskList';


it("creates a list of task", () => {
  const renderer = ReactTestUtils.createRenderer();
  renderer.render(< TaskList />, 'div');
  const result = renderer.getRenderOutput();
  expect(result.props.children[1][2].props.description).toEqual("Buy Mary some chocolates");
  expect(result.props.children[1].length).toEqual(3);
});
