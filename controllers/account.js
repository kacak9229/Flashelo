const User = require('../models/user');

// Profile
exports.profile = function(req, res, next) {
  res.send(req.user);
}
// Settings
exports.settings = function(req, res, next) {
  res.send(req.user);
}
