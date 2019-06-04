var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page with hello. */
router.get('/hello/:name/:message', function(req, res, next) {
  res.render('hello', { title: 'Express', name: req.params.name, message: req.params.message });
});

module.exports = router;
