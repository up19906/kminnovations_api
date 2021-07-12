const co_researcher_expertise_type = require("../models/co_researcher_expertise_type.model");

exports.findAll = (req, res) => {
    co_researcher_expertise_type((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving.",
      });
    else res.send(data);
  });
};

