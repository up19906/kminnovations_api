const Coordinator_about_fundingagency = require("../models/coordinator_about_fundingagency.model.js");

exports.findAll = (req, res) => {
  Coordinator_about_fundingagency.findAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving Coordinator about fundingagency.",
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

  const coordinator_about_fundingagency = new Coordinator_about_fundingagency({
    about_fundingagency_name: req.body.about_fundingagency_name,
    about_fundingagency_institution: req.body.about_fundingagency_institution,
    about_fundingagency_paln_master: req.body.about_fundingagency_paln_master,
    about_fundingagency_paln_sub: req.body.about_fundingagency_paln_sub,
    about_fundingagency_platform: req.body.about_fundingagency_platform,
    about_fundingagency_program: req.body.about_fundingagency_program,
    about_fundingagency_point: req.body.about_fundingagency_point,
    about_fundingagency_goal: req.body.about_fundingagency_goal,
    about_fundingagency_achievement_main:
      req.body.about_fundingagency_achievement_main,
    about_fundingagency_achievement_small:
      req.body.about_fundingagency_achievement_small,
  });

  Coordinator_about_fundingagency.create(
    coordinator_about_fundingagency,
    (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User.",
        });
      else res.status(200).send(data);
    }
  );
};
