import React, { Component } from 'react';
import './Task.css';
import superagent from 'superagent';

class Task extends Component {
  render () {
    return (
      <div className="Task" id={this.props.id}>
        {this.props.description} {this.state.status}
        <br/>
        <button className="button" onClick={this.done}>Done!</button>
        <button type="button" className="remove_button" onClick={this.removeTask}>Remove task</button>
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
    superagent.post('api/tasks/status')
    .send({ id: this.state.id, status: "is done" })
    .end(function(err, res){
      if (err) { console.log(err) }
     });
  }

  removeTask() {
    this.props.removeTask(this.state.id);
  }
};

export default Task;
