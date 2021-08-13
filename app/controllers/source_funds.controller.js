const Source_funds = require("../models/source_funds.model.js");

exports.create = (req, res) => {
  console.log(req);
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  const source_funds = new Source_funds({
    source_funds_name: req.body.source_funds_name,
    source_funds_institution: req.body.source_funds_institution,
    source_funds_paln_master: req.body.source_funds_paln_master,
    source_funds_paln_sub: req.body.source_funds_paln_sub,
    source_funds_platform: req.body.source_funds_platform,
    source_funds_program: req.body.source_funds_program,
    source_funds_point: req.body.source_funds_point,
    source_funds_goal: req.body.source_funds_goal,
    source_funds_achievement_main: req.body.source_funds_achievement_main,
    source_funds_achievement_small: req.body.source_funds_achievement_small,
  });

  Source_funds.create(source_funds, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating",
      });
    else res.status(200).send(data);
  });
};

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

exports.findOne = (req, res) => {
  const id = req.params.id;
  console.log(id);
  Source_funds.findOne(id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Source_funds.",
      });
    else res.send(data);
  });
};
