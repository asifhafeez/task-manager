import React, { Component } from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import App from './../App';
import Task from './../Task';


it('shows a task', () => {
  const renderer = ReactTestUtils.createRenderer();
  renderer.render(<Task description='Visit Japan!' />);
  const result = renderer.getRenderOutput();

  expect(result.type).toBe('div');
  expect(result.props.description).toEqual('Visit Japan!')
});


//
//   const testTask = <Task description='Visit Japan!' />
//   // testTask description = 'Visit Japan!';
//   // <Task description='Visit Japan!' />
//   expect(testTask.props.description).toEqual('Visit Japan!')
// });

// it('can say a task is done', () => {
//   const testTask = <Task description='Visit Japan!' />
//
//   // testTask.done();
//   expect(testTask.state.status).toEqual('is done')
