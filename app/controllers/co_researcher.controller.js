const Co_researcher = require("../models/co_researcher.model");

exports.findAll = (req, res) => {
  Co_researcher.findAll((err, data) => {
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

  const co_researcher = new Co_researcher({
    co_researcher_name_th: req.body.co_researcher_name_th,
    coordinator_name_th: req.body.coordinator_name_th,
    co_researcher_phone: req.body.co_researcher_phone,
    co_researcher_latitude: req.body.co_researcher_latitude,
    co_researcher_longitude: req.body.co_researcher_longitude,
    co_researcher_group_id: req.body.co_researcher_group_id,
  });

  Co_researcher.create(co_researcher, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    else res.status(200).send(data);
  });
};
