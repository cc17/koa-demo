var render = require('../middleware/render');
var newsService = require('../services/news');


exports.index2 = function *(){
  var content = yield newsService.getList();
  this.body = yield render('basic',{
    content: 'test'
  });
}
exports.index = function *(){
  
  this.body = yield render('basic',{
    content: [{title:1111}]
  });
}


exports.create = function *(next){
  var content = yield newsService.create(this.request.body);
  this.body = 'ok';
}