const Consept_proposal = require("../models/concept_proposal.model");

exports.findAll = (req, res) => {
    Consept_proposal.findAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving.",
      });
    else res.send(data);
  });
};

