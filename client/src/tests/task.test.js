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
  const testDoc = ReactTestUtils.renderIntoDocument(<Task description='Visit Japan!' status=""/>);
  const button = ReactTestUtils.scryRenderedDOMComponentsWithClass(testDoc, "button");
  expect(testDoc.state.status).toBe("");
  ReactTestUtils.Simulate.click(button[0]);
  expect(testDoc.state.status).toBe("is done");
});

it('can unmark a task as done', function () {
  const testDoc = ReactTestUtils.renderIntoDocument(<Task description='Visit Japan!' status=""/>);
  const button = ReactTestUtils.scryRenderedDOMComponentsWithClass(testDoc, "button");
  ReactTestUtils.Simulate.click(button[0]);
  expect(testDoc.state.status).toBe("is done");
  expect(testDoc.state.button_status).toBe("Undo");
  ReactTestUtils.Simulate.click(button[0]);
  expect(testDoc.state.status).toBe("");
  expect(testDoc.state.button_status).toBe("Done");
});

it('should add a tag', function () {
  const testDoc = ReactTestUtils.renderIntoDocument(<Task description='Visit Japan!' status=""/>);
  const button = ReactTestUtils.scryRenderedDOMComponentsWithClass(testDoc, "addTag");
  const addTagInput = ReactTestUtils.scryRenderedDOMComponentsWithClass(testDoc, "tagInput");
  addTagInput[0].value = 'travel';
  ReactTestUtils.Simulate.change(addTagInput[0]);
  expect(testDoc.state.taskTags).not.toContain('travel');
  expect(testDoc.state.taskTag).toContain('travel');
  ReactTestUtils.Simulate.click(button[0]);
  expect(testDoc.state.taskTags).toEqual(['travel']);
});
