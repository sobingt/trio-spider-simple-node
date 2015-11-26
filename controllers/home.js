var Blog = require('../models/Blog');

exports.index = function(req, res){
 if(req.query.author)
  {
    
     Blog.find({author: req.query.author},function(err, blogs){
      if(err)
        return err;
      var authors =[];
      var categories =[];
      res.render('home', {
                  blogs: blogs,
                  authors: authors,
                  categories: categories
                });
      });
  }
  else if(req.query.category)
  {
     Blog.find({category: req.query.category},function(err, blogs){
      if(err)
        return err;
      var authors =[];
      var categories =[];
      res.render('home', {
                  blogs: blogs,
                  authors: authors,
                  categories: categories
                });
      });
  }
  else
  {
    Blog.find({},function(err, blogs){
      if(err)
        return err;
      var authors =[];
      var categories =[];
      res.render('home', {
                  blogs: blogs,
                  authors: authors,
                  categories: categories
                });      
    });
    
  }

};