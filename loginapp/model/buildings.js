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
let buildingInfo  = JSON.parse(fs.readFileSync('./buildings.json', 'utf-8'));

exports.createBuilding = (name) =>{

    buildingInfo[buildingInfo.length] = {
        name: name,
        totalSpaces: totalSpaces,
        
    }

    fs.writeFileSync('./buildings.json', JSON.stringify(userInfo));

}

exports.getBuildingInformation = () => {
    return buildingInfo;
}

exports.deleteBuilding = (name) =>{

    for (var i = 0; i < buildingInfo.length; i++){
        if(buildingInfo[i].name == name){
            delete buildingInfo[i]
            fs.writeFileSync('./buildingInfo.json', JSON.stringify(buildingInfo));
            return true;
        }
    }

    buildingInfo[buildingInfo.length] = {
        name: name,
        totalSpaces: totalSpaces,
        
    }

    fs.writeFileSync('./buildings.json', JSON.stringify(userInfo));

}