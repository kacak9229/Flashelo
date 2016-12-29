const User = require('../models/user');

// Profile
exports.profile = function(req, res, next) {
  res.render('accounts/profile', { user: req.user });
}
