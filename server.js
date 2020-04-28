/*mock-data - created by www.hybridappzone.com*/
var express = require('express');
var app = express();

var listener = app.listen(process.env.PORT, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});
