var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (_, res) {
  res.render('index', { title: 'paint' });
});

module.exports = router;
