var User = require('../models/User');


exports.isLogged = function(req, res, next){
  var user = 1;
  if(user)
  {
    next();
  }
  else
    res.render('login');
};
exports.getLogin = function(req, res){
  res.render('login');
};
exports.postLogin = function(req, res){
  User.findOne({email: req.body.email}, function(err, user){
    if(user.password==req.body.password)
    {
      res.redirect('/');
    }
    else
      res.redirect('/login');
  });
};