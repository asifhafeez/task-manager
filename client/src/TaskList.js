import React, { Component } from 'react';
import './TaskList.css';
import ReactDOM from 'react-dom';
import Task from './Task';
import AddTask from './addTask';
import superagent from 'superagent';

class TaskList extends Component {
  render () {
    return(
      <div id="tasklist">
        <AddTask className="addTask" addTask = {this.addTask} />
        { (this.props.data).map(function(task) {
          return <div><Task key={task.id} description={task.description} /></div>;
        })};
      {this.renderTasks()};
      </div>
    )
  };

  constructor(props) {
    super(props);
    this.state = { tasks: []};
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }


renderTasks() {
   return this.state.tasks.map(description=> (
     <Task key={description} description={description} removeTask={this.removeTask}/>
   ));
 }

 addTask(newDescription) {
   this.setState({ tasks: [...this.state.tasks, newDescription] });
 }

 removeTask(task) {
   const filteredTasks = this.state.tasks.filter(description => {
     return description !== task;
   });
   this.setState({ tasks: filteredTasks });
 }
}


export default TaskList;
