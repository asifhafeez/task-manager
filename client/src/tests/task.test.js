import React, { Component } from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import App from '../App';
import Task from '../Task';

// it('shows a task description', () => {
//   const testDoc = ReactTestUtils.renderIntoDocument(<Task description='Visit Japan!' tags={[]} status=""/>);
//   const taskName = ReactTestUtils.scryRenderedDOMComponentsWithClass(testDoc, "text");
//   expect(taskName).toContain('Visit Japan!');
// });

it('can mark a task as done', function () {
  const testDoc = ReactTestUtils.renderIntoDocument(<Task description='Visit Japan!' tags={[]} status=""/>);
  const button = ReactTestUtils.scryRenderedDOMComponentsWithClass(testDoc, "checkbox");
  expect(testDoc.state.status).toBe("");
  ReactTestUtils.Simulate.click(button[0]);
  expect(testDoc.state.status).toBe("is done");
});

it('can unmark a task as done', function () {
  const testDoc = ReactTestUtils.renderIntoDocument(<Task description='Visit Japan!' tags={[]} status=""/>);
  const button = ReactTestUtils.scryRenderedDOMComponentsWithClass(testDoc, "checkbox");
  ReactTestUtils.Simulate.click(button[0]);
  expect(testDoc.state.status).toBe("is done");
  ReactTestUtils.Simulate.click(button[0]);
  expect(testDoc.state.status).toBe("");
});

it('should add a tag', function () {
  const testDoc = ReactTestUtils.renderIntoDocument(<Task description='Visit Japan!' status="" tags={[]}/>);
  const button = ReactTestUtils.scryRenderedDOMComponentsWithClass(testDoc, "addTag");
  const addTagInput = ReactTestUtils.scryRenderedDOMComponentsWithClass(testDoc, "tagInput");
  addTagInput[0].value = 'travel';
  console.log(testDoc)
  ReactTestUtils.Simulate.change(addTagInput[0],{ target: { value: 'travel' } });
  expect(testDoc.state.tags).toEqual([]);
  // expect(testDoc.state.newTag).toEqual('travel');
  ReactTestUtils.Simulate.click(button[0]);
  expect(testDoc.state.tags).toEqual([{name: 'travel'}]);
});
