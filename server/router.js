const express = require('express');
const _ourController = require('./controllers/_our-controller');

module.exports = function(app) {
  const apiRoutes = express.Router();
  apiRoutes.get('/index', _ourController.index);
  apiRoutes.get('/tasks', _ourController.tasks);
  apiRoutes.post('/tasks', _ourController.newTask);
  app.use('/api', apiRoutes);

  const homepage = express.Router();
  app.use('', homepage)
  app.use(express.static('public'));
  homepage.get('/',  _ourController.homepage)
}
