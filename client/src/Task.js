import React, { Component } from 'react';
import './Task.css';
import ReactDOM from 'react-dom';
import superagent from 'superagent';

class Task extends Component {
  render () {
    return (
      <div className="Task" id={this.props.id}>
        {this.props.description} {this.state.status}
        <br/>
        <button className="button" onClick={this.done}>{this.buttonChecker(this.state.status)}</button>
        <button type="button" className="remove_button" onClick={this.removeTask}>Remove task</button>
        <input type="text" ref="input" className="tagInput" onChange={this.handleUpdate}/>
        &nbsp;&nbsp;
        <button className="addTag" onClick={this.addTag}>Add tag</button>
        <div> {this.props.tags.map(tag => (tag.name + ' '))}{this.state.tags.map(tag => (tag.name + ' '))} </div>
      </div>
    );
  }

  constructor(props) {
    super(props);
    var button = this.buttonChecker(props.status)
    this.state = { status: props.status, id: props.id, button_status: button, tags: []};
    this.done = this.done.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.buttonChecker = this.buttonChecker.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.addTag = this.addTag.bind(this);
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

  handleUpdate(event) {
     this.setState({ newTag: event.target.value});
   }

   addTag() {
     this.setState({ tags: [...this.state.tags, {name: this.state.newTag}] });
     superagent.post('api/tasks/tag')
     .send({ id: this.state.id, tag: this.state.newTag })
     .end(function(err, res){
       if (err) { console.log(err) }
      });
      this.refs.input.value = "";
   }

};

export default Task;
