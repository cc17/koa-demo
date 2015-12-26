var passport = require('koa-passport');
var co = require('co');
var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = function(app){
  app.use(passport.initialize());
  app.use(passport.session());
  passport.serializeUser(function(user, done) {
    done(null, user._id)
  });
  passport.deserializeUser(function(id, done) {
    User.findById(id,{
      password:0
    },done)
  });
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  }, function(username,password,done){
    co(function*() {
      return yield User.verifyPassword(username, password)
    }).then(function(user) {
      done(null, user)
    }).catch(function(err) {
      done(null,false,err)
    })
  }
};