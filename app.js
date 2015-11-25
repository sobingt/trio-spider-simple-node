var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var blogs = [
              {
                header: "This is content for a blog one",
                title: "Blog One",
                data:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                link: "/blog1"
              },
              {
                header: "This is content for a blog two",
                title: "Blog two",
                data:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                link: "/blog2"
              },
              {
                header: "This is content for a blog three",
                title: "Blog three",
                data:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                link: "/blog3"
              },
              {
                header: "This is content for a blog four",
                title: "Blog four",
                data:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                link: "/blog4"
              }
            ];

app.set('views',__dirname+"/views");
app.set('view engine','jade');
app.use(bodyParser());
//Routes
app.get('/',function(req, res){
  res.render('home', {
              blogs: blogs
            });
});
app.get('/blog/:id',function(req, res){
  res.render('blogs/blog1',{
    blog: blogs[req.params.id],
    id: req.params.id
  });
});
app.get('/blog/:id/remove',function(req, res){
  blogs.splice(req.params.id, 1);
  res.redirect('/');
});
app.get('/blog1',function(req, res){
  res.render('blogs/blog1',blogs[0]);
});
app.get('/blog2',function(req, res){
  res.render('blogs/blog2',blogs[1]);
});
app.get('/blog3',function(req, res){
  res.render('blogs/blog3',blogs[2]);
});
app.get('/blog4',function(req, res){
  res.render('blogs/blog4',blogs[3]);
});
app.get('/add',function(req, res){
  res.render('addblog');
});

app.post('/add',function(req, res){
  blogs.push({
    header: req.body.header,
    title: req.body.title,
    data: req.body.data,
    link: req.body.link
  });
  res.send(blogs);
});
app.post('/',function(req, res){
  res.send("POST Method: Hello World");
});
app.put('/',function(req, res){
  res.send("PUT Method: Hello World");
});
app.del('/',function(req, res){
  res.send("DELETE Method: Hello World");
});

app.get('/hello',function(req, res){
  res.send("Hello");
});
app.get('/world',function(req, res){
  res.send("World");
});

app.listen('3000', function(){
  console.log("Server at port 3000");
});
