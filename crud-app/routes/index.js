var express = require('express');
var router = express.Router();
var connection = require('../config/db');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'node js express crud app' });
});

router.post('/saveFomData', function (req, res) {
  const userData = {
    fullname: req.body.txt_full_name,
    email: req.body.txt_email,
    contact: req.body.txt_contact,
    description: req.body.txt_description,
    isactive: 1,
  };
  console.log(userData);
  connection.query("INSERT INTO tbl_node_crud SET?", userData, function (err, result) {
    if (err) {
      console.log(err, '{"message" : "internal error.!", "status" : 500}');
      res.end('{"message" : "internal error.!", "status" : 500}');
    } else {
      console.log('record successfully save');
      console.log(userData);
      res.end('{"message" : "Record created successfully...", "status" : 200}');
    }
  });



});
module.exports = router;
