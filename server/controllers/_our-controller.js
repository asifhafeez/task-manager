exports.index = function (req, res, next) {
  res.status(200).json({
    message: "Visit Japan"
  })
}

exports.tasks = function (req, res, next) {
  res.status(200).json({
    description: "drink tea"
  })
}
