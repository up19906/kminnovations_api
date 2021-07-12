const Pretent_type = require("../models/pretent_type.model");

exports.findOne = (req, res) => {
    const id = req.params.id;
    console.log(id);
    Pretent_type.findOne(id,(err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving pretent_type.",
      });
    else res.send(data);
  });
};

