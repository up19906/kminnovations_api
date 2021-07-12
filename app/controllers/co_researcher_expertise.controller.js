const co_researcher_expertise = require("../models/co_researcher_expertise.model");

exports.findAll = (req, res) => {
    co_researcher_expertise((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving.",
      });
    else res.send(data);
  });
};

