const User = require('../models/user');
const Category = require('../models/category');
const Item = require('../models/category');

// Home URL
exports.categories = function(req, res, next) {
  Category.find({}, function(err, categories) {
    if (categories) {
      res.send(categories);
    } else {
      res.send({ message: "Error looking for categories, Try again later" });
    }
  });
}

// Each item URL
exports.itemsForCategory = function(req, res, next) {
  Item.find({ category: req.params.name }, function(err, items) {
    if (items) {
      res.send(items);
    } else {
      res.send({ message: "Couldn't find items that you are looking for"});
    }
  });
}
