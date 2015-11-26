var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var homeController = require('./controllers/home');
var blogController = require('./controllers/blog');

app.set('views',__dirname+"/views");
app.set('view engine','jade');
app.use(bodyParser());
app.use(express.static(__dirname+'/public'));
//Routes
app.get('/',homeController.index);
app.get('/blog',blogController.index);
app.get('/blog/:id',blogController.singleBlog);
app.get('/blog/:id/remove',blogController.removeBlog);
app.get('/add',blogController.getAddBlog);
app.post('/add',blogController.postAddBlog);

app.listen('3000', function(){
  console.log("Server at port 3000");
});