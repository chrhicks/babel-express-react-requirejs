/*jshint globalstrict: true*/
/*global process, require*/
'use strict';

var express = require('express');
var app = require('./lib/setup')(express());

//
//  Routes
//

var photocracyRouter = require('./routes');
// photocracyRouter(app);
app.use('/', photocracyRouter);


//
//  Start Listening on the Port
//

app.listen(app.get('port'), function() {
  process.stdout.write('\nPhotoOp is running on port ' + app.get('port') + '\n\n');
});
