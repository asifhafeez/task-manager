import React, { Component } from 'react';
import './addTask.css';

class AddTask extends Component {
  render () {
    return (
      <div className="addTask">
      <input type="text" className="taskInput"onChange={this.handleUpdate}/>
      &nbsp;&nbsp;
      <button className="addTaskButton" onClick={this.addTask}>Add</button>
      </div>
    );
  }
  constructor(props) {
    super(props);
    this.state = { description: ""}
    this.handleUpdate = this.handleUpdate.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  handleUpdate(event) {
    this.setState({ description: event.target.value});
  }

  addTask() {
    this.props.addTask(this.state.description);
    this.setState({ description: ""})
  }
}

export default AddTask;
