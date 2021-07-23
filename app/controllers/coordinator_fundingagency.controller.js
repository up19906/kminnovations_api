const Coordinator_fundingagency = require("../models/coordinator_fundingagency.model");

exports.create = (req, res) => {
  console.log(req);
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const coordinator_fundingagency = new Coordinator_fundingagency({
    funding_project_name: req.body.funding_project_name,
    coordinator_project: req.body.coordinator_project,
    funding_agency: req.body.funding_agency,
    funding_project_leader: req.body.funding_project_leader,
    select_research: req.body.select_research,
    project_status: req.body.project_status,
    funding_phone: req.body.funding_phone,
    funding_year: req.body.funding_year,
    funding_budget: req.body.funding_budget,
    funding_name: req.body.funding_name,
    funding_type: req.body.funding_type,
    coordinator_univercity_budget: req.body.coordinator_univercity_budget,
    user_id: 10,
    created_by: "upgg",
    updated_by: req.body.updated_by,
  });

  Coordinator_fundingagency.create(coordinator_fundingagency, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating",
      });
    else res.send(data);
  });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Coordinator_fundingagency.update(
    id,
    new Coordinator_fundingagency(req.body),
    (err, data) => {
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
    }
  );
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Coordinator_fundingagency.delete(id, (err, data) => {
    if (err) {
      if (err.message === "not_found") {
        res.status(404).send({
          message: `Not found Data with id ${id}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete with id " + id,
        });
      }
    } else res.send({ message: `This data was deleted successfully!` });
  });
};

exports.findOne = (req, res) => {
  const year = req.params.year;
  console.log(year);
  Coordinator_fundingagency.findOne(year, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving",
      });
    else res.send(data);
  });
};

exports.findById = (req, res) => {
  const id = req.params.id;
  console.log(id);
  Coordinator_fundingagency.findById(id, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving",
      });
    else res.send(data);
  });
};

exports.sumYear = (req, res) => {
  const year = req.params.year_budget;
  console.log(year);
  Coordinator_fundingagency.sumYearBudjet(year, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving",
      });
    else res.send(data);
  });
};

exports.countByYear = (req, res) => {
  const year = req.params.year;
  console.log(year);
  Coordinator_fundingagency.countByYear(year, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving",
      });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
  Coordinator_fundingagency.findAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving Coordinator fundingagency.",
      });
    else res.send(data);
  });
};
