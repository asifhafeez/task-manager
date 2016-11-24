import React, { Component } from 'react';
import './TaskList.css';
import Task from './Task';
import AddTask from './addTask';
import superagent from 'superagent';

class TaskList extends Component {
  render() {
    return(
      <div className="TaskList">
      <AddTask addTask={ this.addTask } className="addTask" />
      // { this.getTasks() }
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state =  { tasks: [ "Becoming an awesome dev", "Get paid lots of $$$", "Buy Mary some chocolates" ] };
    this.addTask = this.addTask.bind(this);
    this.getTasks = this.getTasks.bind(this);
  }

  // showTasks(self) {
  //   return self.state.tasks.map(description=> (
  //     <Task key={description} description={description}/>
  //   ));
  // }

  renderTasks() {
    return this.state.tasks.map(description=> (
      <Task key={description} description={description}/>
    ));
  }

  addTask(newDescription) {
    this.setState({ tasks: [...this.state.tasks, newDescription] });
  }

  getTasks() {
    self = this;
    superagent.get('/api/tasks')
    .accept('json')
    .end(function(err, res) {
      if(err) throw err;
      var taskJSON = JSON.parse(res.text);
      taskJSON.tasks.map(task => (
        self.addTask(task.description)
      ));
      console.log(self.state.tasks);
      self.renderTasks();
    });
  }

}



export default TaskList;
