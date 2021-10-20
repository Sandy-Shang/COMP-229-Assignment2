/* <   File Name: users.js
    Student Name: Sandy Shang
    StudentID: 301177535
    Date: September 30th, 2021 */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
