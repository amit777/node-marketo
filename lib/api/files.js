var _ = require('lodash'),
    Promise = require('bluebird'),
    util = require('../util'),
    qs = require('querystring'),
    log = util.logger();

function Files(marketo, connection) {
  this._marketo = marketo;
  this._connection = connection;
}

Files.prototype = {
  getFiles: function(options) {
    var path = util.createAssetPath( 'files.json' );
    options = _.extend({}, options, {
      _method: 'GET'
    });
    return this._connection.get(path, {data: options});
  },
};

module.exports = Files;
