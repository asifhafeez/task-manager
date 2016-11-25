import React, { Component } from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import App from '../../App';
import Task from '../../Task';
import AddTask from '../../addTask';
import TaskList from '../../TaskList';

it('can add a task', function () {
  const dummyJson = '{"tasks":[{"id":8,"description":"Domain Modelling","status":"not yet","createdAt":"2016-11-25T09:14:42.062Z","updatedAt":"2016-11-25T09:14:42.062Z"},{"id":9,"description":"Sleep!","status":"not yet","createdAt":"2016-11-25T10:38:03.882Z","updatedAt":"2016-11-25T10:38:03.882Z"}]}';
  const dummyData = JSON.parse(dummyJson);
  const taskList = ReactTestUtils.renderIntoDocument(<TaskList data = { dummyData.tasks }/>);
  expect(taskList.state.tasks).not.toContain("Visit Japan!");
  const addTaskInput = ReactTestUtils.scryRenderedDOMComponentsWithClass(taskList, "taskInput");
  addTaskInput[0].value = 'Visit Japan!';
  ReactTestUtils.Simulate.change(addTaskInput[0]);
  const addTaskButton = ReactTestUtils.scryRenderedDOMComponentsWithClass(taskList, "addTaskButton");
  ReactTestUtils.Simulate.click(addTaskButton[0]);
  expect(taskList.state.tasks).toContain("Visit Japan!");
});
