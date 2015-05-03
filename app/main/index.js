var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res){
  res.sendFile(path.resolve(__dirname + '/../index.html'));
});

app.listen(5000);
