var express = require('express');
var router = express.Router();
const usermodel = require('../model/users');

router.get('/', function(req, res, next) {

  if(req.session.loggedIn && req.session.isAdmin){
    res.redirect('/adminDestinations');
  }
  else{
    res.render("adminLogin", { title:'PMS-Admin Login'});
  }
});

router.post('/', (req, res, next)=>{
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;
    let userID = usermodel.getID(email, password);
    if(userID > -1 && usermodel.getAdminStatus(userID)){
      req.session.loggedIn = true;
      req.session.username = usermodel.getUsername(userID);
      req.session.isAdmin = usermodel.getAdminStatus(userID);
      req.session.userID = userID;
      res.redirect('/adminDestinations');
      console.log("Success");
    }
    else{
      res.render('adminLogin', {error: true});
    }
  });
  
  module.exports = router;
