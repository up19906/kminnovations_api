const sql = require("./db.js");

// constructor
const Coordinator_fundingagency_project = function (data) {
  this.fundingagency_project_type = data.fundingagency_project_type;
  this.fundingagency_project_name = data.fundingagency_project_name;
  this.fundingagency_project_funding = data.fundingagency_project_funding;
  this.fundingagency_project_budget = data.fundingagency_project_budget;
  this.fundingagency_project_star = data.fundingagency_project_star;
  this.fundingagency_project_agency = data.fundingagency_project_agency;
  this.fundingagency_project_latitude = data.fundingagency_project_latitude;
  this.fundingagency_project_Longitude = data.fundingagency_project_Longitude;
  this.fundingagency_project_status = data.fundingagency_project_status;
  this.fundingagency_project_upload = data.fundingagency_project_upload;
};

Coordinator_fundingagency_project.findAll = (result) => {
  sql.query("SELECT * FROM coordinator_fundingagency_project", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Coordinator_fundingagency_project: ", res);
    result(null, res);
  });
};

Coordinator_fundingagency_project.create = (newData, result) => {
  sql.query(
    `INSERT INTO coordinator_fundingagency_project 
  (
    fundingagency_project_type,
    fundingagency_project_name,
    fundingagency_project_funding,
    fundingagency_project_budget, 
    fundingagency_project_star,
    fundingagency_project_agency,
    fundingagency_project_latitude,
    fundingagency_project_Longitude,
    fundingagency_project_status,
    fundingagency_project_upload,
    created_date,
    updated_date
  )
  VALUE 
  (
    '${newData.fundingagency_project_type}',
    '${newData.fundingagency_project_name}',
    '${newData.fundingagency_project_funding}',
    '${newData.fundingagency_project_budget}',
    '${newData.fundingagency_project_star}',
    '${newData.fundingagency_project_agency}',
    '${newData.fundingagency_project_latitude}',
    '${newData.fundingagency_project_Longitude}',
    '${newData.fundingagency_project_status}',
    '${newData.fundingagency_project_upload}',
    NOW(),
    NOW()
  )`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      console.log("created user: ", { id: res.insertId, ...newData });
      result(null, { id: res.insertId, ...newData });
    }
  );
};

module.exports = Coordinator_fundingagency_project;
