import React, { Component } from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import App from '../App';
import Task from '../Task';
import TaskList from '../TaskList';


it("creates a list of tasks with tags", () => {
  const dummyJson = '{"tasks":[{"id":8,"description":"Domain Modelling","status":"", "Tags":[{"id":3,"name":"Coding"}]},{"id":9,"description":"Sleep!","status":"", "Tags":[{"id":4,"name":"Important"}]}]}';
  const dummyData = JSON.parse(dummyJson);
  const renderer = ReactTestUtils.createRenderer();
  renderer.render(< TaskList data = { dummyData.tasks }/>, 'div');
  const result = renderer.getRenderOutput();
  expect(result.props.children[1][0].props.description).toEqual('Domain Modelling');
  expect(result.props.children[1][0].props.tags).toEqual([{"id":3,"name":"Coding"}]);
  expect(result.props.children[1].length).toEqual(2);
});
