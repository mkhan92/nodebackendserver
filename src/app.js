var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
var controller = require('./controller');
var get = controller.get;
var post = controller.post;
var put = controller.put;
var del = controller.del;

// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});

app.get('/api', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

//company
app.get('/api/v1/company', function(req, res){ get(req,res, "company") });
app.post('/api/v1/company', function(req, res){ post(req,res, "company") });
app.put('/api/v1/company', function(req, res){ put(req,res, "company") });
app.delete('/api/v1/company', function(req, res){ cdel(req,res, "company") });

//country
app.get('/api/v1/country', function(req, res){ get(req,res, "country") });
app.post('/api/v1/country', function(req, res){ post(req,res, "country") });
app.put('/api/v1/country', function(req, res){ put(req,res, "country") });
app.delete('/api/v1/country', function(req, res){ del(req,res, "country") });

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
