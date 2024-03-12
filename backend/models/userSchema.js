const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    displayName: String,
    photos: [{
      value: String
    }],
    provider: String,
    _raw: String
  },
  {
    timestamps: true
  });

module.exports.User = mongoose.model('User', userSchema, 'users')