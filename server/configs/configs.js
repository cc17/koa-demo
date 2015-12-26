var env = process.env.NODE_ENV || 'development';
var _ = require('lodash');
var configs = require('./configs-default');
if(env != 'development'){
  configs = _.merge(configs,require('./configs-' + env));
}
module.exports = configs;