var express = require('express');
var router = express.Router();
var standupCtrl = require('../controller/virtualStandup.server.controller');

/* GET home page. */
router.get('/', function(req, res) {
  return standupCtrl.list(req, res);
});

router.post('/', function(req, res) {
  return standupCtrl.filterMethod(req, res);
});

router.get('/newnote', function(req, res){
	return standupCtrl.getNote(req, res);
});

router.post('/newnote', function(req, res) {
	return standupCtrl.create(req, res);
});

module.exports = router;
