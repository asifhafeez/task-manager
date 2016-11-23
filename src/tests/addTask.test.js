import React, { Component } from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import App from './../App';
import Task from './../Task';
import AddTask from './../addTask';

it('can add a task', function () {
  const addTaskDoc = ReactTestUtils.renderIntoDocument(<AddTask/>);
  const addInput = ReactTestUtils.scryRenderedDOMComponentsWithClass(addTaskDoc, "taskInput");
  const addTaskButton = ReactTestUtils.scryRenderedDOMComponentsWithClass(addTaskDoc, "addTaskButton");
  expect(addTaskDoc.state.description).not.toContain("Visit Japan!");
  console.log(addTaskButton);
  console.log(addInput);
  addInput.value = 'Visit Japan!';
  ReactTestUtils.Simulate.change(addInput[0]);
  ReactTestUtils.Simulate.click(addTaskButton[0]);
  expect(addTaskDoc.state.description).toContain("Visit Japan!");
});
