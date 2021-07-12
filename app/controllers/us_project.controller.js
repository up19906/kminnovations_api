const Us_project = require("../models/us_project.model");

exports.findAll = (req, res) => {
    Us_project((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving.",
      });
    else res.send(data);
  });
};

