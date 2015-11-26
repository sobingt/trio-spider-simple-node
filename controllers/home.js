var authors =["sobin","prath","darshan","surya"];
var blogData = require('../models/Blog');
var blogs = blogData.blogs;
var categories =blogData.categories(blogs);

exports.index = function(req, res){
 if(req.query.author)
  {
    var tempBlogs = getBlogByAuthor(blogs,req.query.author);
    var tempCategory =getCategoryOfAuthor(tempBlogs,req.query.author);
    res.render('home', {
              blogs: tempBlogs,
              authors: authors,
              categories: tempCategory
            });
  }
  else if(req.query.category)
  {
    var tempBlogs =getBlogByCategory(blogs,req.query.category)
      res.render('home', {
              blogs: tempBlogs,
              authors: authors,
              categories: categories
            });
  }
  else
    res.render('home', {
                blogs: blogs,
                authors: authors,
                categories: categories
              });
};