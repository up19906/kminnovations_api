const User_group = require("../models/user_group.model");

exports.findAll = (req, res) => {
    User_group.findAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving.",
      });
    else res.send(data);
  });
};

