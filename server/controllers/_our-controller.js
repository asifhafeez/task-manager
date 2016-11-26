var models = require('../models');

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
  models.Task.find({where: {id: req.body.id}}).then(function(task) {
    return task.destroy();
  })
}

exports.updateStatus = function (req, res, next) {
  console.log(req.body);
  models.Task.find({ where: {id: req.body.id} }).then(function(task) {
    return task.update({ status: req.body.status });
  })
}

exports.homepage = function(req, res, next) {
  res.redirect('index.html');
}
