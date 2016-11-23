const express = require('express');
const _ourController = require('./controllers/_our-controller');

module.exports = function(app) {
  const apiRoutes = express.Router();
  apiRoutes.get('/index', _ourController.index);
  apiRoutes.get('/tasks', _ourController.tasks);
  app.use('/api', apiRoutes);
}
