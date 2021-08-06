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
    project_type_id: req.body.project_type_id,
    concept_proposal_name: req.body.concept_proposal_name,
    source_funds_id: req.body.source_funds_id,
    concept_year: req.body.concept_year,
    concept_budget: req.body.concept_budget,
    concept_univercity_budget: req.body.concept_univercity_budget,
    concept_leader: req.body.concept_leader,
    concept_phone: req.body.concept_phone,
    concept_proposal_type: req.body.concept_proposal_type,
  });

  Consept_proposal.create(consept_proposal, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    else res.status(200).send(data);
  });
};

exports.update_IDsubconcept = (req, res) => {
  const consept_proposal = new Consept_proposal({
    concpt_proposal_sub: req.body.concpt_proposal_sub,
  });
  const id = req.body.id;
  Consept_proposal.update_IDsubconcept(id, consept_proposal, (err, data) => {
    if (err) {
      if (err.message === "not_found") {
        res.status(404).send({
          message: `Not found data with id ${id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating Data with id " + id,
        });
      }
    } else res.send(data);
  });
};

exports.createsubconcept = (req, res) => {
  console.log(req);
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const consept_proposal = new Consept_proposal({
    project_type_id: req.body.project_type_id,
    concept_proposal_name: req.body.concept_proposal_name,
    source_funds_id: req.body.source_funds_id,
    concept_year: req.body.concept_year,
    concept_budget: req.body.concept_budget,
    concept_univercity_budget: req.body.concept_univercity_budget,
    concept_leader: req.body.concept_leader,
    concept_phone: req.body.concept_phone,
    concept_proposal_type: req.body.concept_proposal_type,
  });

  Consept_proposal.createsubconcept(consept_proposal, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    else res.status(200).send(data);
  });
};
