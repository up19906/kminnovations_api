const Us_working_experience = require("../models/us_working_experience.model");

exports.findAll = (req, res) => {
    Us_working_experience((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving",
      });
    else res.send(data);
  });
};

