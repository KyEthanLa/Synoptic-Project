var express = require('express');
var router = express.Router();

const usermodel = require('../model/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  let isAdmin = req.session.isAdmin;
  let user = req.session.username;
  let loggedIn = req.session.loggedIn;
  let users = usermodel.getUsers();
  if(!loggedIn){
    res.redirect('/');
  }
  else{
    res.render("adminUsers", { 
      title: 'PMS-Admin Users',
      isAdmin,
      user,
      loggedIn,
      userList: users
    });
  }
});

router.post('/', (req, res, next)=>{
  console.log(req.body);
  console.log("Ping");
});

module.exports = router;