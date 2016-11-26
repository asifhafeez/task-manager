import React, { Component } from 'react';
import './Task.css';

class Task extends Component {
  render () {
    return (
      <div className="Task" id={this.props.id}>
        {this.props.description} {this.props.status}
        <br/>
        <button className="button" onClick={this.done}>Done!</button>
        <form method="post" action="/api/tasks/delete" id="deleteTaskForm"  >
        <button name="delete" type="submit" className="remove_button" form="deleteTaskForm" value={this.props.id} onClick={this.removeTask}>Remove task</button>
        </form>
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
