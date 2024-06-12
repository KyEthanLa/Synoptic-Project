var express = require('express');
var router = express.Router();

const buildings = require('../model/buildings');

/* GET home page. */
router.get('/', function(req, res, next) {
  let isAdmin = req.session.isAdmin;
  let user = req.session.username;
  let loggedIn = req.session.loggedIn;
  let buildingOptions = buildings.getBuildingInformation();
  if(!loggedIn){
    res.redirect('/');
  }
  else{
    res.render("billing", { 
      title: 'PMS-Home',
      isAdmin,
      user,
      loggedIn,
      buildings: buildingOptions
    });
  }
});

router.post('/', (req, res, next)=>{
  console.log(req.body);
  res.redirect('/payment');
});

module.exports = router;
