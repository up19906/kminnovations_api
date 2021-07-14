const Bb_user = require("../models/bb_user.model");

exports.findAll = (req, res) => {
  Bb_user.findAllUser((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving.",
      });
    else res.send(data);
  });
};

exports.findOne = (req, res) => {
  const id_card = req.params.id_card;
  Bb_user.findById(id_card, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving.",
      });
    else res.send(data);
  });
};

exports.findByIdCard = (req, res, next) => {
  Bb_user.findOne(req.user_idcard, next, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving.",
      });
    else res.send(data);
  });
};
