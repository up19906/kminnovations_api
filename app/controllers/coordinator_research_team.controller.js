const coordinator_research_team = require("../models/coordinator_research_team.model.js");

exports.findAll = (req, res) => {
  coordinator_research_team.findAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving project type.",
      });
    else res.send(data);
  });
};
