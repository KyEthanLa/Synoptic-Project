var express = require('express');
var router = express.Router();

/* GET payment page. */
router.get('/', function(req, res, next) {
  let isAdmin = req.session.isAdmin;
  let user = req.session.username;
  let loggedIn = req.session.loggedIn;
  if(!loggedIn){
    res.redirect('/');
  }
  else{
    res.render("payment", { 
      title: 'PMS-Payment',
      isAdmin,
      user,
      loggedIn
    });
  }
});

router.post('/', (req, res, next)=>{
  console.log(req.body);
  let numberInput = req.body.numberInput;
  let nameInput = req.body.nameInput;
  let monthInput = req.body.monthInput;
  let yearInput = req.body.yearInput;
  res.redirect('/home');
  // let userID = usermodel.getID(email, password);
  // if(userID > -1){
  //   req.session.loggedIn = true;
  //   req.session.username = usermodel.getUsername(userID);
  //   req.session.isAdmin = usermodel.getAdminStatus(userID);
  //   req.session.userID = userID;
  //   res.redirect('/home');
  //   console.log("Success");
  // }
  // else{
  //   res.render('', {error: true});
  // }
});

module.exports = router;