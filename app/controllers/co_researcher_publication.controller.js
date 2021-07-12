const co_researcher_publication = require("../models/co_researcher_publication.model");

exports.findAll = (req, res) => {
    co_researcher_publication((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving.",
      });
    else res.send(data);
  });
};

