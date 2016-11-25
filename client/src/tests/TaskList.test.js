import React, { Component } from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import App from '../App';
import Task from '../Task';
import TaskList from '../TaskList';


it("creates a list of task", () => {
  const dummyJson = '{"tasks":[{"id":8,"description":"Domain Modelling","status":"not yet","createdAt":"2016-11-25T09:14:42.062Z","updatedAt":"2016-11-25T09:14:42.062Z"},{"id":9,"description":"Sleep!","status":"not yet","createdAt":"2016-11-25T10:38:03.882Z","updatedAt":"2016-11-25T10:38:03.882Z"}]}';
  const dummyData = JSON.parse(dummyJson);
  const renderer = ReactTestUtils.createRenderer();
  renderer.render(< TaskList data = { dummyData.tasks }/>, 'div');
  const result = renderer.getRenderOutput();
  expect(result.props.children[1][0].props.children.props.description).toEqual('Domain Modelling');
  expect(result.props.children[1].length).toEqual(2);
});
