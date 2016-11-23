import React, { Component } from 'react';
import './TaskList.css';
import Task from './Task';
import AddTask from './addTask'

class TaskList extends Component {
  render() {
    return(
      <div className="TaskList">
      <AddTask addTask={ this.addTask } className="addTask" />
      { this.renderTasks() }
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state =  { tasks: [ "Becoming an awesome dev", "Get paid lots of $$$", "Buy Mary some chocolates" ] };
    this.addTask = this.addTask.bind(this);
  }

  renderTasks() {
    return this.state.tasks.map(description=> (
      <Task key={description} description={description}/>
    ));
  }

  addTask(newDescription) {
    this.setState({ tasks: [...this.state.tasks, newDescription] });
  }
}

export default TaskList;
