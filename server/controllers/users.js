let mongoose = require("mongoose");
let User = mongoose.model("User");

module.exports = {
  // Setting the session variable
  session: function(req, res) {
    if (req.session.user_id) {
      return res.json({
        status: true,
        user_id: req.session.user_id
      });
    }
    return res.json({ status: false });
  },

  // index to test with postman
  index: function(req, res) {
    User.find({}, function(err, users) {
      if (err) {
        return res.json(err);
      }
      return res.json(users);
    });
  },

  // Create a user controller => sends to DB
  create: function(req, res) {
    User.create(req.body, function(err, user) {
      if (err) {
        return res.json(err);
      }
      req.session.user_id = user._id;
      return res.json(user);
    });
  },

  // Show: grabs all records by id => controller
  show: function(req, res) {
    User.findbyId(req.param.id, function(err, user) {
      if (err) {
        return res.json(err);
      }
      return res.json(user);
    });
  },

  // Logout:  destroys session variable Id => controller
  logout: function(req, res) {
    if (req.session.user_id) {
      delete req.session.user_id;
    }
    return res.json({ status: true });
  }
};
