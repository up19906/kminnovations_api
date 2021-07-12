const co_researcher = require("../models/co_researcher.model");

exports.findAll = (req, res) => {
    co_researcher((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving.",
      });
    else res.send(data);
  });
};

