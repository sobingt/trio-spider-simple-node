var authors =["sobin","prath","darshan","surya"];
var blogData = require('../models/BlogStatic');
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


exports.singleBlog = function(req, res){
  res.render('blogs/blog1',{
    blog: blogs[req.params.id],
    id: req.params.id
  });
};

exports.removeBlog = function(req, res){
  blogs.splice(req.params.id, 1);
  res.redirect('/');
};

exports.getAddBlog =function(req, res){
  res.render('addblog');
};

exports.postAddBlog = function(req, res){
  blogs.push({
    header: req.body.header,
    title: req.body.title,
    data: req.body.data,
    link: req.body.link
  });
  res.send(blogs);
};

function getBlogByAuthor(blogs,author){
  var tempArray = [];
  for(var i=0; i< blogs.length; i++)
  {
    if(blogs[i].author==author)
      tempArray.push(blogs[i]);
  }
  return tempArray;
}

function getBlogByCategory(blogs,category){
  var tempArray = [];
  for(var i=0; i< blogs.length; i++)
  {
    if(blogs[i].category==category)
      tempArray.push(blogs[i]);
  }
  return tempArray;
}
function getCategoryOfAuthor(authorBlogs,author){
  var tempArray = [];
  var found = false;
  for(var i=0; i< authorBlogs.length; i++)
  {
    for(var j=0; j< tempArray.length; j++)
    {
      if(authorBlogs[i].category==tempArray[j])
        found = true;
    }
    if(!found)
      tempArray.push(authorBlogs[i].category);
  }
  return tempArray;
}