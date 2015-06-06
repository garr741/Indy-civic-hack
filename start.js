#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require('./app');
var debug = require('debug')('indy-civ-hack');
var http = require('http');


/**
 * Get port from environment and store in Express.
 */

app.set('port', process.env.PORT || 3000)

var server = http.createServer(app);


server.listen(app.get('port'), function(){
  debug('Express server listening on port ' + server.address().port);
});
