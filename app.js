var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var passport = require('passport');
var passportConf = require('./config/passport');
//var MongoStoreFunction = require('connect-mongo');
//var MongoStore = MongoStoreFunction(session);
var MongoStore = require('connect-mongo')(session);
var app = express();


var homeController = require('./controllers/home');
var blogController = require('./controllers/blog');
var userController = require('./controllers/user');

mongoose.connect("mongodb://localhost:27017/blog");
mongoose.connection.on('error',function(){
  console.log("Mongo Error in connection");
});
mongoose.connection.on('sucess',function(){
  console.log("Mongo connected");
});
app.set('views',__dirname+"/views");
app.set('view engine','jade');
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(__dirname+'/public'));
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: "2hjkeydwjfhusdifsb",
  store: new MongoStore({
    url:"mongodb://localhost:27017/blog",
    autoReconnect: true
  })
}));
app.use(passport.initialize());
app.use(passport.session());
//Routes
app.get('/',homeController.index);
app.get('/blog',blogController.index);
app.get('/blog/:id',blogController.singleBlog);
app.get('/blog/:id/remove',userController.isLogged, blogController.removeBlog);
app.get('/blog/:id/edit',userController.isLogged, blogController.getEditBlog);
app.post('/blog/:id/edit',blogController.postEditBlog);
app.get('/add',blogController.getAddBlog);
app.post('/add',blogController.postAddBlog);

app.get('/login', userController.getLogin);
app.post('/login', userController.postLogin);
app.listen('3000', function(){
  console.log("Server at port 3000");
});