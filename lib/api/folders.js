var _ = require('lodash'),
    Promise = require('bluebird'),
    util = require('../util'),
    qs = require('querystring'),
    log = util.logger();

function Folders(marketo, connection) {
  this._marketo = marketo;
  this._connection = connection;
}

Folders.prototype = {
  getFolders: function(options) {
    var path = util.createAssetPath( 'folders.json' );
    options = _.extend({}, options, {
      _method: 'GET'
    });
    return this._connection.get(path, {data: options});
  },
};

module.exports = Folders;
