import React, { Component } from 'react';
import './Task.css';
import ReactDOM from 'react-dom';
import superagent from 'superagent';

class Task extends Component {
  render () {
    return (
      <div className="Task" id={this.props.id}>
        <div className="left">
          <div className="text">{this.props.description} </div>
          <br></br>
          <button type="button" className="remove_button" onClick={this.removeTask}>Delete task</button>
          <div className="tagInput">
            <input type="text" ref="input" className="tagInput" onChange={this.handleUpdate}/>
            <button className="addTag" onClick={this.addTag}>Add tag</button>
          </div>
          <div className="tags"> {this.props.tags.map(tag => (tag.name + ' '))}{this.state.tags.map(tag => (tag.name + ' '))} </div>
        </div>
        <a onClick={this.done}>
          <div className="checkbox">
            <img className="box" src='http://csdms.colorado.edu/mediawiki/images/archive/20110601151736!Checkbox.png'/>
            {this.state.status === "is done" ?
            <img className="tick" src='http://www.clipartbest.com/cliparts/dT6/okx/dT6okxEbc.png'/>
            : null }
          </div>
        </a>
      </div>
    );
  }

  constructor(props) {
    super(props);
    var button = this.buttonChecker(props.status)
    this.state = { status: props.status, id: props.id, button_status: button, tags: [], done: (props.status === "is done"), newTag: ""};
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
     console.log("HELLO")
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
