const Source_funds = require("../models/source_funds.model.js");

exports.findAll = (req, res) => {
    Source_funds.findAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Source_funds.",
      });
    else res.send(data);
  });
};

