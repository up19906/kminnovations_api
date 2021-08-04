const Consept_proposal = require("../models/concept_proposal.model");

exports.findAll = (req, res) => {
  Consept_proposal.findAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving.",
      });
    else res.send(data);
  });
};

exports.create = (req, res) => {
  console.log(req);
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const consept_proposal = new Consept_proposal({
    project_type: req.body.selectProjectType,
    concept_proposal_name: req.body.project_name,
    concept_sourcefund: req.body.selectSourceFunds,
    concept_year: req.body.concept_year,
    concept_budget: req.body.project_budget,
    concept_univercity_budget: req.body.concept_univercity_budget,
    concept_leader: req.body.select_researchname,
    user_idcard: req.body.userid,
    concept_phone: req.body.concept_phone,
    concept_proposal_type: req.body.project_status,
  });

  Consept_proposal.create(consept_proposal, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    else res.status(200).send(data);
  });
};
