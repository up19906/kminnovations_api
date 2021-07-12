const Us_educational = require("../models/us_educational.model");

exports.findAll = (req, res) => {
    Us_educational((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving.",
      });
    else res.send(data);
  });
};

