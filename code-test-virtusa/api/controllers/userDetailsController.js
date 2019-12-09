'use strict';


var mongoose = require('mongoose'),
User = mongoose.model('UserDetails');

/* 
Function name- list_all_users
Description- To fetch all the users from Db
*/
exports.list_all_users = function(req, res) {
    //console.log(req.headers);
    if(req.headers.token === "TestToken")
    {
        User.find({}, function(err, user) {
            if (err){
              res.send(err);}
            res.json(user);
          });
    }
    else
    {
        res.send("Unauthorized Access");
    }

};

/* 
Function name- create_a_user
Description- To create an user
*/
exports.create_a_user = function(req, res) {
    if(req.headers.token === "TestToken"){
        var new_user = new User(req.body);
        new_user.save(function(err, user) {
          if (err){
            res.send(err);}
          res.json(user);
        });
    }
    else
    {
        res.send("Unauthorized Access");
    }
};