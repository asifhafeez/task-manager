import React from 'react';
import ReactDOM from 'react-dom';
import App from './../App';
import Task from './../Task';


it('shows a task', () => {
  const testTask = <Task task='Visit Japan!' />
  expect(testTask.props.task).toEqual('Visit Japan!')
});
