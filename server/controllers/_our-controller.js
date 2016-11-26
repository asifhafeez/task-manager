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
    models.Task.create({description: req.body.description, status: ""})
    .then(function() {
      res.redirect('/');
    });
}

exports.deleteTask = function (req, res, next) {
  models.Task.find({where: {id: req.body.delete}}).then(function(task) {
    return task.destroy()
  }).then(function() {
    res.redirect('/');
  });
}

exports.homepage = function(req, res, next) {
  res.redirect('index.html');
}
