var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname));

app.get('/', function homepage(req, res) {
    res.sendFile(__dirname + '/templates/search/index.html');
});

app.listen(process.env.PORT || 3000, function() {
  console.log('Example app listening on port 3000!');
});
