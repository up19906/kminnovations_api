const Coordinator_fundingagency_project = require("../models/coordinator_fundingagency_project.model.js");

exports.findAll = (req, res) => {
    Coordinator_fundingagency_project.findAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving.",
      });
    else res.send(data);
  });
};

exports.create = (req, res) => {
  //   console.log(req);
  console.log(req.body);
  console.log(req.files);

  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  if (!req.files) {
    res.status(400).send({
      message: "No files were uploaded.",
    });
    return;
  }

  const file = req.files.project_upload;
  const file_name = file.name;

  const pathfile = `app/assets/file_upload/${file_name}`;

  convertStringToDouble = (str) => {
    return parseFloat(str);
  };

  const lat = convertStringToDouble(req.body.project_latitude);
  const long = convertStringToDouble(req.body.project_Longitude);

  const coordinator_fundingagency_project =
    new Coordinator_fundingagency_project({
      fundingagency_project_type: req.body.project_type,
      fundingagency_project_name: req.body.project_name,
      fundingagency_project_funding: req.body.project_funding,
      fundingagency_project_budget: req.body.project_budget,
      fundingagency_project_star: req.body.project_star,
      fundingagency_project_agency: req.body.project_agency,
      fundingagency_project_latitude: lat,
      fundingagency_project_Longitude: long,
      fundingagency_project_status: req.body.project_status,
      fundingagency_project_upload: file_name,
    });

  if (file.mimetype == "application/pdf") {
    file.mv(pathfile, (err) => {
      if (err)
        return res.status(400).send({
          message: "err" + err,
        });
      Coordinator_fundingagency_project.create(
        coordinator_fundingagency_project,
        (err, data) => {
          if (err)
            res.status(500).send({
              message: err.message || "Some error occurred while creating",
            });
          else
            res
              .status(200)
              .send(data);
        }
      );
    });
  } else {
    res.status(400).send({
      message: "This format is not allowed , please upload file with '.pdf'",
    });
  }
};
