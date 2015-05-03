var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.resolve(__dirname + '/../../dist')));
app.use(express.static(path.resolve(__dirname + '/../../bower_components')));

app.get('/', function(req, res){
  res.sendFile(path.resolve(__dirname + '/../../dist/index.html'));
});

app.get('/about', function(req, res){
  res.sendFile(path.resolve(__dirname + '/../../dist/about.html'));
});

app.get('/contact', function(req, res){
  res.sendFile(path.resolve(__dirname + '/../../dist/contact.html'));
});

app.listen(app.get('port'), function() {
  console.log("Node app is running on port", app.get('port'))
})
