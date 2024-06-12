// var mysql = require ('mysql2');
// var connection = mysql.createConnection( {
//     host: "localhost",
//     user: "root",
//     password: "abc1234",
//     database: "pmsdatabase"
// });

// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected Successfully!");
// });

const fs = require('fs');
let userInfo  = JSON.parse(fs.readFileSync('./userdb.json', 'utf-8'));

exports.arrived = (userID) =>{

    userInfo[userID].arrival = Date.now();

}

exports.departed = (userID) =>{

    userInfo[userID].departed = Date.now();

}