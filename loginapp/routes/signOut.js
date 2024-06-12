var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.isAdmin = false;
  req.session.username = false;
  req.session.loggedIn = false;
  res.redirect('/');
});

module.exports = router;
