const us_patent = require("../models/us_patent.model");

exports.findAll = (req, res) => {
    us_patent((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving.",
      });
    else res.send(data);
  });
};

