const Project_type = require("../models/project_type.model.js");

exports.findAll = (req, res) => {
    Project_type.findAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving project type.",
      });
    else res.send(data);
  });
};

