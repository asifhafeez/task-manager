import React, { Component } from 'react';
import './Task.css';

class Task extends Component {
  render () {
    return (
      <div className="Task" id={this.props.id}>
        {this.props.description} {this.props.status}
        <br/>
        <button className="button" onClick={this.done}>Done!</button>
        <button className="remove_button" onClick={this.removeTask}>Remove task</button>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = { status: props.status, id: props.id};
    this.done = this.done.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  done() {
    this.setState({ status: "is done"})
  }

  removeTask() {
    this.props.removeTask(this.state.id);
  }
};

export default Task;
