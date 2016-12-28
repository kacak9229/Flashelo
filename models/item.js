const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  owner: { type: Schema.Types.ObjectID, ref: 'User'},
  name: { type: String, unique: true },
  price: { type: Number },
  time : { type : Date, default: Date.now }
});

module.exports = mongoose.model('Category', CategorySchema);
