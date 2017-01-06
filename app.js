var koa = require('koa');
var app = module.exports = koa();
var serve = require('koa-static');
var parse = require('co-busboy');
var fs = require('fs');
var path = require('path');
var userAgent = require('koa-useragent');
var requireDir = require('require-dir');
//var mongoose = require('koa-mongoose');
var configs = require('./server/configs/configs');


//链接数据库
const mongoose = require("mongoose");
mongoose.connect(configs.mongo.host + configs.mongo.database);
mongoose.connection.on("error", function(err) {
  console.log(err);
  console.log('111');
});

app.use(serve(__dirname + '/public'));

//middleware
require('./server/middleware/index')(app);


requireDir('./server/models/');
 

require('./server/routes/home')(app);

//handle 404
app.use(function *(next){
  try{
    yield next;
  }catch(e){
    this.status = 500;
    this.body = 'intenal error';
  }
});
app.use(function *(next){
  this.statu = 404;
  this.body = 'not found';
});



if (!module.parent) app.listen(3000);