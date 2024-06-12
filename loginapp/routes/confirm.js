var express = require('express');
var router = express.Router();

const buildings = require('../model/buildings');

/* GET payment page. */
router.get('/', function(req, res, next) {
  let isAdmin = req.session.isAdmin;
  let user = req.session.username;
  let loggedIn = req.session.loggedIn;
  let buildingOptions = buildings.getBuildingInformation();
  ;
  if(!loggedIn){
    res.redirect('/');
  }
  else{
    res.render("confirm", { 
      title: 'PMS-Confirm',
      isAdmin,
      user,
      loggedIn,
      buildings: buildingOptions
    });
  }
});

module.exports = router;