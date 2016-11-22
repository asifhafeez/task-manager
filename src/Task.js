import React, { Component } from 'react';
import './Task.css';

class Task extends Component {
  render () {
    return (
      <div className="Task">{this.props.task}</div>
    );
  }
};

export default Task;
