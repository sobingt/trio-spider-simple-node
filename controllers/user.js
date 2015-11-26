var passport = require('passport');
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
exports.getLogin = function(req, res, next){
  res.render('login');
};
exports.postLogin = function(req, res, next){
    passport.authenticate('local', function(err, user, info){
      if (err)
        return next(err);
      console.log(user);
      if(!user)
      {
        console.log("user to login");
        res.redirect('/login',{message: info.message});
      }
      req.logIn(user,function(err){
        if(err)
          return next(err);
        console.log("Login Sucessful")
        res.redirect('/');
      });
    })(req, res, next);
};

exports.getSignUp = function(req, res, next){
  res.render('register');
};
exports.postSignUp = function(req, res, next){
    var user = new User({
      email: req.body.email,
      password: req.body.password
    });
  user.save();
  res.redirect('/');
};

exports.getLogout = function(req, res, next){
  req.logout();
  res.redirect('/');
}