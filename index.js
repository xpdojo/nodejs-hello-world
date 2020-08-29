var express = require('express')
var app = express();
var port = process.env.PORT || 5000
app.set('port', port)
// app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send(`Hello World! My Port >> ${port}\n`)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})