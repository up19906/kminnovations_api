const { findAll } = require("../models/coordinator_fundingagency_status.model");

exports.findAll = (req, res) => {
  findAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving coordinator_fundingagency_status.",
      });
    else res.send(data);
  });
};
