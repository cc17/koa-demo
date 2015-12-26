var mongoose = require('mongoose');
var NewsModel = mongoose.model('News');

var NewsService = {};
NewsService.create = function *(body){
  var news = new NewsModel(body);
  yield news.save();
};
NewsService.getList = function *(){
  var news = yield NewsModel.find().exec();
  return news;
  
};

module.exports = NewsService;