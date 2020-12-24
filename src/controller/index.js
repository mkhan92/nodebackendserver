exports.get = function(req, res, serviceName) {
  var Service = require('../service/'+ serviceName);
  var read = Service.read;
  read(req, function(error, result) {
    if (error) {
      res.status(500).json({ 
        message: 'An error occured',
        error
      });
    }
    else {
      res.status(200).json({
        message: 'success',
        result
      });
    }
  })
}

exports.post = function(req, res, serviceName) {
  var Service = require('../service/'+ serviceName);
  var create = Service.create;
  create(req, function(error, result) {
      if(error) {
          res.status(500).json({ 
              error
          });
      }
      else {
          res.status(200).json({
              message: 'success',
              result
          });
      }
  })
}

exports.put = function(req, res, serviceName) {
  var Service = require('../service/'+ serviceName);
  var update = Service.update;
  update(req, function(error, result) {
      if (error) {
        res.status(500).json({ 
          message: 'An error occured',
          error
        });
      }
      else {
        res.status(200).json({
          message: 'success',
          result
        });
      }
    })
}

exports.del = function(req, res, serviceName) {
  var Service = require('../service/'+ serviceName);
  var del = Service.delete;
  del(req, function(error, result) {
      if (error) {
        res.status(500).json({ 
          message: 'An error occured',
          error
        });
      }
      else {
        res.status(200).json({
          message: 'success',
          result
        });
      }
    })
}
