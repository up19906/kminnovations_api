const Source_funds = require("../models/source_funds.model.js");

exports.create = (req, res) => {
  console.log(req);
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const source_funds = new Source_funds({
    source_funds_name: req.body.source_funds_name,
    created_by: req.body.created_by,
    created_date: new Date(),
  });

  Source_funds.create(
    source_funds,
    (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating",
        });
      else
        res
          .status(200)
          .send({ massage: "this data has been save now.", result: data });
    }
  );
};

exports.findAll = (req, res) => {
    Source_funds.findAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Source_funds.",
      });
    else res.send(data);
  });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  console.log(id);
  Source_funds.findOne(id,(err, data) => {
  if (err)
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving Source_funds.",
    });
  else res.send(data);
});
}

