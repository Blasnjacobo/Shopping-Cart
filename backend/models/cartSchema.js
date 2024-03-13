const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  items: [{
    perfume: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Perfume',
      required: false
    },
    quantity: {
      type: Number,
      required: false
    }
  }]
});

const Cart = mongoose.model('Cart', cartSchema, 'cart');

module.exports = Cart;