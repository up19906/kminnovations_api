const us_publication = require("../models/us_publication.model");

exports.findAll = (req, res) => {
    us_publication((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving.",
      });
    else res.send(data);
  });
};

