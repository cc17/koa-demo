var render = require('../middleware/render');
var newsService = require('../services/news');


exports.index = function *(){
  var content = yield newsService.getList();
  this.body = yield render('basic',{
    content: content
  });
}

exports.create = function *(next){
  var content = yield newsService.create(this.request.body);
  this.body = 'ok';
}