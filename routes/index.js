var express = require('express');
var router = express.Router();
const GetController  = require('../controllers/GetController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get("/getData", GetController.getData);
/* router.get('/getData', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); */

module.exports = router;
