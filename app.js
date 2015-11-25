var express = require('express');
var app = express();

app.set('views',__dirname+"/views");
app.set('view engine','jade');
//Routes
app.get('/',function(req, res){
  res.render('home');
});
app.get('/blog1',function(req, res){
  res.render('blogs/blog1');
});
app.get('/blog2',function(req, res){
  res.render('blogs/blog2');
});
app.get('/blog3',function(req, res){
  res.render('blogs/blog3');
});
app.get('/blog4',function(req, res){
  res.render('blogs/blog4');
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