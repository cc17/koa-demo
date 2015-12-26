var render = require('co-views');
module.exports = render(__dirname + '/../views',{
  map: { html: 'swig'}
});
 