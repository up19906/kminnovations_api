const { findAll } = require("../models/coordinator_budget_type.model");

exports.findAll = (req, res) => {
  findAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving coordinator_budget_type.",
      });
    else res.send(data);
  });
};
