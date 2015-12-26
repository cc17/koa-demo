var router = require('koa-router');
var route = router();
var homeController = require('../controller/home');
var countController= require('../controller/counts');


route.get('/',homeController.index);
route.post('/',homeController.create);

 // secured routes
  route.get("/value",  countController.getCount);
  route.get("/inc", countController.increment);
  route.get("/dec", countController.decrement);

module.exports = function(app){
  app.use(route.routes());
}