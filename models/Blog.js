var mongoose = require('mongoose');

var blogSchema = new mongoose.Schema({
  header: String,
  title: { type: String},
  data: String,
  author: { type: String, default:"darshan"},
  category: String,
  link: String
});

module.exports =mongoose.model('Blog',blogSchema);
