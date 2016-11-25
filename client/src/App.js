import React from 'react';
import './App.css';
// import Task from './Task';
import TaskList from './TaskList';
import superagent from 'superagent';


const App = (props) => {
  return (<div className="App">
              <TaskList data = { props.data.tasks } />
              </div>);
    };



export default App;
