'use strict';
module.exports = function(app) {
  var userDetails = require('../controllers/userDetailsController');

  // todoList Routes
  app.route('/userDetails')
    .get(userDetails.list_all_users)
    .post(userDetails.create_a_user);



};