import React, { Component } from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import App from './../../App';
import Task from './../../Task';
import AddTask from './../../addTask';
import TaskList from './../../TaskList';

it("can remove a task", () => {
  const dummyJson = '{"tasks":[{"id":8,"description":"Domain Modelling","status":"", "Tags":[{"id":3,"name":"Coding"}]},{"id":9,"description":"Sleep!","status":"", "Tags":[{"id":4,"name":"Important"}]}]}';
  const dummyData = JSON.parse(dummyJson);
  const taskList = ReactTestUtils.renderIntoDocument(<TaskList data = { dummyData.tasks }/>);
  const button = ReactTestUtils.scryRenderedDOMComponentsWithClass(taskList, "remove_button");
  expect(taskList.state.tasks).toContainEqual({"Tags": [{"id": 3, "name": "Coding"}], "description": "Domain Modelling", "id": 8, "status": ""});
  ReactTestUtils.Simulate.click(button[0]);
  expect(taskList.state.tasks).not.toContainEqual({"Tags": [{"id": 3, "name": "Coding"}], "description": "Domain Modelling", "id": 8, "status": ""});
});
