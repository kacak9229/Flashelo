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

// Search mechanism
exports.search = function(req, res, next) {
  Item.find({ name: req.params.name }, function(err, items) {
    if (err) {
      res.send("Error");
    } else {
      res.send(items);
    }
  });s
}

// Post a photo to the database, will be to S3
exports.postPhoto = function(req, res, next) {

  // S3 stuffs
  const item = new Item();
  item.name = req.body.name;
  item.owner = req.user._id;
  item.price = req.body.price;
  // item.photo = Still need to figure out on the frontend part. Do i save it as files or something else?

  owner: { type: Schema.Types.ObjectID, ref: 'User'},
  name: { type: String, unique: true },
  price: { type: Number },
  time



}
