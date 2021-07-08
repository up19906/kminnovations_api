const User = require("../models/userinfo.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
  console.log(req);
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Customer
  const user = new User({
    age: req.body.age,
    name: req.body.name,
  });

  // Save Customer in the database
  User.create(user, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    else
      res
        .status(200)
        .send({ massage: "this data has been save now.", result: data });
  });
};
