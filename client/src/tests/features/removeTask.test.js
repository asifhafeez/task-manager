import React, { Component } from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import App from './../../App';
import Task from './../../Task';
import AddTask from './../../addTask';
import TaskList from './../../TaskList';

it("can remove a task", () => {
  const dummyJson = '{"tasks":[{"id":8,"description":"Domain Modelling","status":"","createdAt":"2016-11-25T09:14:42.062Z","updatedAt":"2016-11-25T09:14:42.062Z"},{"id":9,"description":"Sleep!","status":"not yet","createdAt":"2016-11-25T10:38:03.882Z","updatedAt":"2016-11-25T10:38:03.882Z"}]}';
  const dummyData = JSON.parse(dummyJson);
  const taskList = ReactTestUtils.renderIntoDocument(<TaskList data = { dummyData.tasks }/>);
  const button = ReactTestUtils.scryRenderedDOMComponentsWithClass(taskList, "remove_button");
  expect(taskList.state.tasks).toContainEqual({"description": "Domain Modelling", "id": 8, "status":""});
  ReactTestUtils.Simulate.click(button[0]);
  expect(taskList.state.tasks).not.toContainEqual({"description": "Domain Modelling", "id": 8}, "status":"");
});
