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
        <AddTask className="addTask" />
        {(this.props.data).map(function(task) {
          return <div><Task key={task.id} description={task.description}/></div>;
        })};
      </div>
    )
  };

  constructor(props) {
    super(props);
  }
}



export default TaskList;
