var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');

var userSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  phone:[String],
  gender:{type: String, enum:["Male","Female","Third"]}
});

module.exports =mongoose.model('User',userSchema);
