const mysql = require('mysql');
// import { v4 as uuid } from 'uuid';
var uid = require('uuid');
var uuid = uid.v4;
const config = require('./../db');

exports.create = function(req, callback) {
  const db = mysql.createConnection(config)
  db.connect((err) => {
    try {
      if (err) {
        console.log(err);
        db.end();
        callback(err, {message: "db connection failed"}) ;
      }
      else {
        //init
        const id = uuid();
        const name = req.body.name;

        //sql
        var sql = `INSERT INTO countries (countryId, name) VALUES ('${id}', '${name}')`;

        //execute query
        db.query(sql, (err, result) => {
          if (err) {
            console.log(err);
            db.end();
            callback(err, {message: "failed"}) ;
          }
          else {
            console.log(result);
            db.end();
            callback(null, result);
          }
        });
      }
    } catch (error) {
      console.log("catch error: ",error);
    }
    });
}

exports.read = function(req, callback) {
  const db = mysql.createConnection(config)
  db.connect((err) => {
    try {
      if (err) {
        console.log(err);
        db.end();
        callback(err, {message: "db connection failed"}) ;
      }
      else {
        //init

        //sql
        var sql = "SELECT * FROM countries order by name";

        //execute query
        db.query(sql, (err, result) => {
          if (err) {
            console.log(err);
            db.end();
            callback(err, {message: "failed"}) ;
          }
          else {console.log(result);
            db.end();
            callback(null, result);
          }
        });
      }
    } catch (error) {
      console.log("catch error: ",error);
    }
    });
}

exports.update = function(req, callback) {
  const db = mysql.createConnection(config)
  db.connect((err) => {
    try {
      if (err) {
        console.log(err);
        db.end();
        callback(err, {message: "db connection failed"}) ;
      }
      else {
        //init
        const id = req.body.id;
        const name = req.body.name;

        //sql
        var sql = `UPDATE countries SET name='${name}' WHERE countryId='${id}'`;

        //execute query
        db.query(sql, (err, result) => {
          if (err) {
            console.log(err);
            db.end();
            callback(err, {message: "failed"}) ;
          }
          else {
            console.log(result);
            db.end();
            callback(null, result);
          }
        });
      }
    } catch (error) {
      console.log("catch error: ",error);
    }
    });
}

exports.delete = function(req, callback) {
  callback(null, req);
}
