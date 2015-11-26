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


exports.singleBlog = function(req, res){
  Blog.findById(req.params.id,function(err, blog){
    if(err)
      return err;
    res.render('blogs/blog1',{
      blog: blog,
      id: req.params.id
    });
  });

};
exports.getEditBlog = function(req, res){
  Blog.findById(req.params.id,function(err, blog){
    if(err)
      return err;
    res.render('editBlog',{
      blog: blog
    });
  });

};
exports.postEditBlog = function(req, res){
  Blog.findById(req.body.id,function(err, blog){
    if(err)
      return err;
    blog.title = req.body.title;
    blog.header = req.body.header;
    blog.data = req.body.data;
    blog.link = req.body.link;
    blog.save();
    res.redirect("/blog/"+blog._id);
  });

};
exports.removeBlog = function(req, res){
  Blog.findById(req.params.id).remove(function(){
    res.redirect('/');
  });
};

exports.getAddBlog =function(req, res){
  res.render('addblog');
};

exports.postAddBlog = function(req, res){
  var blog = new Blog({
    header: req.body.header,
    title: req.body.title,
    data: req.body.data,
    link: req.body.link
  });
  blog.save(function(err, blog){
    res.redirect('/');
  });
};
