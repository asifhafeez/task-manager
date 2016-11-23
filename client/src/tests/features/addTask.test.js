import React, { Component } from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import App from './../../components/App/App';
import Task from './../../components/App/Task';
import AddTask from './../../components/App/addTask';
import TaskList from './../../components/App/TaskList';

it('can add a task', function () {
  const taskList = ReactTestUtils.renderIntoDocument(<TaskList/>);
  expect(taskList.state.tasks).not.toContain("Visit Japan!");
  const addTaskInput = ReactTestUtils.scryRenderedDOMComponentsWithClass(taskList, "taskInput");
  addTaskInput[0].value = 'Visit Japan!';
  ReactTestUtils.Simulate.change(addTaskInput[0]);
  const addTaskButton = ReactTestUtils.scryRenderedDOMComponentsWithClass(taskList, "addTaskButton");
  ReactTestUtils.Simulate.click(addTaskButton[0]);
  expect(taskList.state.tasks).toContain("Visit Japan!");
});
