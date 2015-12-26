var mongoose = require('mongoose');  
var Schema = mongoose.Schema;
var User = Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, default: '' },
  phone: { type: String, default: '' },
  active: { type: Boolean, default: false },
  watchs:{ type: Array, default: [] },
  aboutme:{ type: Array, default: [] },
  sex: { type: String,  default: 'man' },
  head: { type: String, default:'' },
  level: { type: Number, default: 0 },
  role: { type: Number,  min: 0,  max: 3, default: 0 },
  createtime: { type: Date,  default: Date.now() }
}, {
  safe: true,
  collection: 'users',
  toJSON: {
    transform: function(doc, ret, options) {
      delete ret.password;
    },
  },
});

User.statics.exist = function(email) {
  return this.findOne({
    email: email
  }).exec()
}

User.statics.verifyPassword = function*(email,password){
  var user = this.find()
  if(!user){

  }
  user.comparePassword(password);
};
User.methods.comparePassword = function(candidatePassword){
  return bcypt.compare(candidatePassword,this.password);
}

mongoose.model('User',User);