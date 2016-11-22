import React from 'react';
import './App.css';
import Task from './Task';
import AddTask from './addTask';

const App = () => {
  return (<div className="App"><Task description='Visit Japan!'/>
  <AddTask/></div>);
};

export default App;
