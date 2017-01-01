const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User'},
  course: { type: Schema.Types.ObjectId, ref: 'Course'},
  rating: String,
  content: String
});

module.exports = mongoose.model('Review', ReviewSchema);
