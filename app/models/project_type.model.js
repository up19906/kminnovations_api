const sql = require("./db.js");

// constructor
const Project_type = function (data) {
  this.project_type_id = data.project_type_id;
  this.project_type_name = data.project_type_name;
};

Project_type.findAll = (result) => {
  sql.query("SELECT * FROM project_type", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("project_type: ", res);
    result(null, res);
  });
};

module.exports = Project_type;
