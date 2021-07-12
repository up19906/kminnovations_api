const us_award = require("../models/us_award.model");

exports.findAll = (req, res) => {
    us_award((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving",
      });
    else res.send(data);
  });
};

