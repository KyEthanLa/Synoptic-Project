var express = require('express');
var router = express.Router();
const fs = require('fs');
let buildingOptions  = JSON.parse(fs.readFileSync('./buildings.json', 'utf-8'));

/* GET home page. */
router.get('/', function(req, res, next) {
    let isAdmin = req.session.isAdmin;
    let user = req.session.username;
    let loggedIn = req.session.loggedIn;
    if(!loggedIn){
      res.redirect('/adminLogin');
    }
    else{
      res.render("adminDestinations", { 
        title: 'PMS-Admin Destinations',
        isAdmin,
        user,
        loggedIn,
        buildings: buildingOptions
      });
    }
  });
  
  module.exports = router;