const {
  findAll,
  findCondition,
} = require("../models/concept_proposal_research_faculty.model");

exports.findAll = (req, res) => {
  findAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving concept_proposal_research_faculty.",
      });
    else res.send(data);
  });
};

exports.findCondition = (req, res) => {
  console.log(req.query);

  findCondition(req.query, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving concept_proposal_research_faculty.",
      });
    else res.send(data);
  });
};
