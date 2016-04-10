var express = require('express')
var middleware = require('./middleware.js')

var app = express();
var port = 3000;

app.use(middleware.logger);

app.get('/about', function(req, res){
  res.send('About US');
})

app.use(express.static(__dirname + '/public'));

app.listen(port, function(){
  console.log('Server at port '+ port + ' started...');
})
