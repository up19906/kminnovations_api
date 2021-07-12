const Coordinator_fundingagency_academic = require("../models/coordinator_fundingagency_academic.model");

exports.create = (req, res)=> {
    console.log(req);
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
    }

    const coordinator_fundingagency_academic = new Coordinator_fundingagency_academic({
        funding_ac_name: req.body.funding_ac_name,
        funding_ac_project: req.body.funding_ac_project,
        funding_ac_agency: req.body.funding_ac_agency,
        funding_ac_leader: req.body.funding_ac_leader,
        funding_ac_phone: req.body.funding_ac_phone,
        funding_ac_year: req.body.funding_ac_year,
        funding_ac_budget: req.body.funding_ac_budget,
        funding_name: req.body.funding_name,
        coordinator_univercity_ac_budget: req.body.coordinator_univercity_ac_budget,
        funding_user_id: 10,
        funding_created_by: "upgg",
        funding_created_date: req.body.created_date
      });
      
      Coordinator_fundingagency_academic.create(
        coordinator_fundingagency_academic,
        (err, data) => {
          if (err)
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating.",
            });
          else
            res
              .status(200)
              .send(data);
        }
      );
}

exports.update = (req, res)=> {
    const id = req.params.id;

    Coordinator_fundingagency_academic.update(
        id,
        new Coordinator_fundingagency_academic(req.body),
        (err, data) => {
          if (err) {
            if (err.message === "not_found") {
              res.status(404).send({
                message: `Not found data with id ${id}.`
              });
            } else {
              res.status(500).send({
                message: "Error updating Data with id " + id
              });
            }
          } else res.send(data);
        }
      );

}

exports.delete = (req, res) => {
    const id = req.params.id
    Coordinator_fundingagency_academic.delete(id, (err, data) => {
      if (err) {
        if (err.message === "not_found") {
          res.status(404).send({
            message: `Not found Data with id ${id}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete with id " + id
          });
        }
      } else res.send({ message: `This data was deleted successfully!` });
    });
  };

  exports.findAll = (req, res) => {
    Coordinator_fundingagency_academic.findAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving.",
          });
        else res.send(data);
      });
}

exports.findById = (req, res) => {
    const id = req.params.id;
    console.log(id);
    Coordinator_fundingagency_academic.findOne(id,(err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving",
      });
    else res.send(data);
  });
};

exports.sumYear = (req, res) => {
    const year = req.params.year_budget;
    console.log(year);
    Coordinator_fundingagency_academic.sumYearBudjet(year,(err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving",
      });
    else res.send(data);
  });
};

exports.countByYear = (req, res) => {
    const year = req.params.year;
    console.log(year);
    Coordinator_fundingagency_academic.countByYear(year,(err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving",
      });
    else res.send(data);
  });
};
  

