import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import superagent from 'superagent';


var start = function (tasks) {
  ReactDOM.render(
  <App data = {tasks} />,
  document.getElementById('root')
);}

var getTasks = function (callback) {
  superagent.get('/api/tasks')
  .accept('json')
  .end(function(err, res) {
    if(err) throw err;
    var taskJSON = JSON.parse(res.text);
    callback(taskJSON)
  });
}

getTasks(start);
