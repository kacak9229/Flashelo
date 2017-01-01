const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  seller: { type: Schema.Types.ObjectId, ref: 'User' },
  buyer: { type: Schema.Types.ObjectId, ref: 'User' },
  item: { type: Schema.Types.ObjectId, ref: 'Item' },
  decision: String,
  response: String,
  
})
