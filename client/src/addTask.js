import React, { Component } from 'react';
import './addTask.css';

class AddTask extends Component {
  render () {
    return (
      <div className="addTask">
      <form method="post" action="/api/tasks" id="addTaskForm" >
        <input type="text" name="description" className="taskInput"onChange={this.handleUpdate}/>
      </form>
        &nbsp;&nbsp;
      <button type="submit" className="addTaskButton" form="addTaskForm" onClick={this.addTask}>Add</button>
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

  removeTask() {
   this.props.removeTask(this.props.description);
 }

}



export default AddTask;
