var passport = require('passport');
var localStrategies = require('passport-local');

var User = require('../models/User');

//serialize
//Deserialize


passport.use(new localStrategies({usernameField: 'email'},function(email, password, done){
  User.findOne({email: req.body.email}, function(err, user){
    if(user.password==password)
    {
      return done(null,user);
    }
    else
      return done(null,false,{message: "Invalid password and email"});
  });
}))