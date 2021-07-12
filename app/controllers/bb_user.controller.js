const Bb_user = require("../models/bb_user.model");

exports.findAll = (req, res) => {
    Bb_user((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving.",
      });
    else res.send(data);
  });
};

