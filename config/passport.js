var passport = require('passport');
var localStrategies = require('passport-local');

var User = require('../models/User');

passport.serializeUser(function(user, done) {
  console.log(user);
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});


passport.use(new localStrategies({usernameField: 'email'},function(email, password, done){
  User.findOne({email: email}, function(err, user){
    if(err)
      return err;
    console.log('user.password');
    console.log(user.password);
    console.log(password);
    user.comparePassword(password, function(err, isMatch){
      if(isMatch)
        return done(null,user);
      else
        return done(null,false,{message: "Invalid password and email"});
    });
      
  });
}))