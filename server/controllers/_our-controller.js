var models = require('../models');

exports.index = function (req, res, next) {
  res.status(200).json({
    message: "Visit Japan"
  })
}

exports.tasks = function (req, res, next) {
  models.Task.findAll().then(function(tasks){
    res.status(200).json({
      tasks
    })
  })
}

exports.newTask = function (req, res, next) {
    models.Task.create({description: req.query.description, status: req.query.status
    }).then(function() {
    res.redirect('/');
  });
}

exports.homepage = function(req, res, next) {
  res.redirect('/build/index.html');
}
