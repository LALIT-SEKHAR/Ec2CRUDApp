const User = require("../models/User");
exports.AddUser = (req, res) => {
  const newUser = new User(req.body);
  newUser.save((err, user) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        error: "unable to save user on BD",
        message: err.message,
      });
    }
    return res.status(200).json({
      message: "user saved successfully",
    });
  });
};

exports.GetUser = (req, res) => {
  User.findById(req.query.id, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        error: "unable to find user on BD",
        message: err.message,
      });
    }
    user.password = undefined;
    return res.status(200).json(user);
  });
};
exports.GetAllUser = (req, res) => {
  User.find((err, users) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        error: "unable to find users on BD",
        message: err.message,
      });
    }
    return res.status(200).json(users);
  });
};

exports.UpdateUser = (req, res) => {
  User.findByIdAndUpdate(req.query.id, req.body, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        error: "unable to update user on BD",
        message: err.message,
      });
    }
    return res.status(200).json(user);
  });
};

exports.DeleteUser = (req, res) => {
  User.findByIdAndDelete(req.query.id, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        error: "unable to delete user on BD",
        message: err.message,
      });
    }
    return res.status(200).json(user);
  });
};
