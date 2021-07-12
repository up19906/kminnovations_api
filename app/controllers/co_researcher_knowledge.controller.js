const co_researcher_knowledge = require("../models/co_researcher_knowledge.model");

exports.findAll = (req, res) => {
    co_researcher_knowledge((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving.",
      });
    else res.send(data);
  });
};

