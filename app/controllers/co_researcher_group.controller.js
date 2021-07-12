const co_researcher_group = require("../models/co_researcher_group.model");

exports.findAll = (req, res) => {
    co_researcher_group((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving.",
      });
    else res.send(data);
  });
};

