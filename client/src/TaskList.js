import React, { Component } from 'react';
import './TaskList.css';
import ReactDOM from 'react-dom';
import Task from './Task';
import AddTask from './addTask';
import superagent from 'superagent';

class TaskList extends Component {
  // render() {
  //   return(
  //     <div className="TaskList">
  //     <AddTask addTask={ this.addTask } className="addTask" />
  //     </div>
  //   );
  // }

  constructor(props) {
    super(props);
    // this.state =  { tasks: [ "Becoming an awesome dev", "Get paid lots of $$$", "Buy Mary some chocolates" ] };
    // this.addTask = this.addTask.bind(this);
    // this.getTasks = this.getTasks.bind(this);
    // this.renderTasks = this.renderTasks.bind(this);
    {var self = this;
      this.getTasks(function(json) {
        self.renderTasks(json)
      });
    };
  }

  // showTasks(self) {
  //   return self.state.tasks.map(description=> (
  //     <Task key={description} description={description}/>
  //   ));
  // }

  // taskJSON.tasks.map(task => (
  //   self.addTask(task.description)
  // ));
  // console.log(self.state.tasks);
  // self.renderTasks();

  renderTasks(json) {
      ReactDOM.render(
          <div className="TaskList">
            <AddTask className="addTask" />
            {json.tasks.map(function(task) {
              return <div><Task key={task.id} description={task.description}/></div>;
            })};
          </div>,
      document.getElementById('root'));
  };


  // taskJSON.tasks.map(task => (
  //   self.addTask(task.description)
  // ));
  // console.log(self.state.tasks);
  // self.renderTasks();

  // addTask(newDescription) {
  //   this.setState({ tasks: [...this.state.tasks, newDescription] });
  // }

  getTasks(callback) {
    var self = this;
    superagent.get('/api/tasks')
    .accept('json')
    .end(function(err, res) {
      if(err) throw err;
      var taskJSON = JSON.parse(res.text);
      callback(taskJSON)
    });
  }

}



export default TaskList;
