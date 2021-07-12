const co_researcher_award = require("../models/co_researcher_award.model");

exports.findAll = (req, res) => {
    co_researcher_award((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving.",
      });
    else res.send(data);
  });
};

