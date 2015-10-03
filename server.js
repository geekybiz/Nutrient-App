var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var Food = require('./api/models/foodModel.js')
port = 8080;
app = express();
var mongoURI = 'mongodb://localhost:27017/fatApp';




//Mongoose Connection
mongoose.set('debug', true);
mongoose.connect(mongoURI);
mongoose.connection.once('open', function() {
  console.log('Connected to mongoDB at: ', mongoURI);
});

app
  .use(bodyParser.json())
  .use(cors())
  .use(express.static(__dirname + '/public'))

  .post('/api/food', function(req, res){
    Food.create(req.body, function(err, resp){
      if (err) return res.status(500).json(err);
      return res.status(200).json(resp);
    });
  })




  .listen(port, function(){
    console.log('Listening on port: ', port);
  });
