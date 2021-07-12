const Coordinator_about_fundingagency = require("../models/coordinator_about_fundingagency.model.js");

exports.findAll = (req, res) => {
  Coordinator_about_fundingagency.findAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Coordinator about fundingagency.",
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
    about_fundingagency_name: req.body.name,
    about_fundingagency_institution: req.body.institution,
    about_fundingagency_paln_master: req.body.paln_master,
    about_fundingagency_paln_sub: req.body.paln_sub,
    about_fundingagency_platform: req.body.platform,
    about_fundingagency_program: req.body.program,
    about_fundingagency_point: req.body.point,
    about_fundingagency_goal: req.body.goal,
    about_fundingagency_achievement_main: req.body.achievement_main,
    about_fundingagency_achievement_small: req.body.achievement_small,
  });

  Coordinator_about_fundingagency.create(
    coordinator_about_fundingagency,
    (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User.",
        });
      else
        res
          .status(200)
          .send(data);
    }
  );
};
