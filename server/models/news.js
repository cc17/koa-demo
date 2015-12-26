var mongoose = require('mongoose');  
var Schema = mongoose.Schema;
var News = new Schema({
  title:{
    type:'string'
  },
  url:{
    type:'string'
  },
  createdAt:{
    type:Date,
    default:Date.now
  }
});
mongoose.model('News',News);