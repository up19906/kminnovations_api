const Us_certificate = require("../models/us_certificate.model");

exports.findAll = (req, res) => {
    Us_certificate((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving",
      });
    else res.send(data);
  });
};

