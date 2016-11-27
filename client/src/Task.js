import React, { Component } from 'react';
import './Task.css';
import superagent from 'superagent';

class Task extends Component {
  render () {
    return (
      <div className="Task" id={this.props.id}>
        {this.props.description} {this.state.status}
        <br/>
        <button className="button" onClick={this.done}>{this.buttonChecker(this.state.status)}</button>
        <button type="button" className="remove_button" onClick={this.removeTask}>Remove task</button>
      </div>
    );
  }

  constructor(props) {
    super(props);
    var button = this.buttonChecker(props.status)
    this.state = { status: props.status, id: props.id, button_status: button };
    this.done = this.done.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.buttonChecker = this.buttonChecker.bind(this);
  }

  buttonChecker(status) {
    if (status === "") {
      return "Done";
    } else {
      return "Undo";
    }
  }

  changeStatus() {
    if (this.state.status === "") {
      return "is done";
    } else {
      return "";
    }
  }

  done() {
    var newStatus = this.changeStatus();
    this.setState({ status: newStatus, button_status: this.buttonChecker(newStatus) })
    superagent.post('api/tasks/status')
    .send({ id: this.state.id, status: newStatus })
    .end(function(err, res){
      if (err) { console.log(err) }
     });
  }

  removeTask() {
    this.props.removeTask(this.state.id);
  }
};

export default Task;
