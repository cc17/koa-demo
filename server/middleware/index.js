var bodyParser = require('koa-bodyparser');
var logger = require('koa-logger');
module.exports = function(app){
  app.use(logger());
  app.use(bodyParser());
  
}