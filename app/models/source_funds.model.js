const sql = require("./db.js");

// constructor
const Source_funds = function (data) {
  this.source_funds_name = data.source_funds_name;
  this.source_funds_institution = data.source_funds_institution;
  this.source_funds_paln_master = data.source_funds_paln_master;
  this.source_funds_paln_sub = data.source_funds_paln_sub;
  this.source_funds_platform = data.source_funds_platform;
  this.source_funds_program = data.source_funds_program;
  this.source_funds_point = data.source_funds_point;
  this.source_funds_goal = data.source_funds_goal;
  this.source_funds_achievement_main = data.source_funds_achievement_main;
  this.source_funds_achievement_small = data.source_funds_achievement_small;
};

Source_funds.create = (newData, result) => {
  sql.query(
    `INSERT INTO source_funds 
  (
      source_funds_name,
      source_funds_institution,
      source_funds_paln_master,
      source_funds_paln_sub,
      source_funds_platform,
      source_funds_program,
      source_funds_point,
      source_funds_goal,
      source_funds_achievement_main,
      source_funds_achievement_small,
      created_date
  ) 
  VALUE 
  (
  '${newData.source_funds_name}',
  '${newData.source_funds_institution}',
  '${newData.source_funds_paln_master}',
  '${newData.source_funds_paln_sub}',
  '${newData.source_funds_platform}',
  '${newData.source_funds_program}',
  '${newData.source_funds_point}',
  '${newData.source_funds_goal}',
  '${newData.source_funds_achievement_main}',
  '${newData.source_funds_achievement_small}',
  now()
  )`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      console.log("created: ", { id: res.insertId, ...newData });
      result(null, { id: res.insertId, ...newData });
    }
  );
};

Source_funds.findAll = (result) => {
  sql.query("SELECT * FROM source_funds", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("source_funds: ", res);
    result(null, res);
  });
};

Source_funds.findOne = (id, result) => {
  sql.query(
    `SELECT * FROM source_funds WHERE source_funds_id = ${id}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.length) {
        console.log("found: ", res[0]);
        result(null, res[0]);
        return;
      }

      result({ message: "not_found" }, null);

      // console.log("patent_type: ", res);
      // result(null, res);
    }
  );
};

module.exports = Source_funds;
