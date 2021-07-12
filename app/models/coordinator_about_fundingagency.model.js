const sql = require("./db.js");

// constructor
const Coordinator_about_fundingagency = function (data) {
  this.about_fundingagency_name = data.about_fundingagency_name;
  this.about_fundingagency_institution = data.about_fundingagency_institution;
  this.about_fundingagency_paln_master = data.about_fundingagency_paln_master;
  this.about_fundingagency_paln_sub = data.about_fundingagency_paln_sub;
  this.about_fundingagency_platform = data.about_fundingagency_platform;
  this.about_fundingagency_program = data.about_fundingagency_program;
  this.about_fundingagency_point = data.about_fundingagency_point;
  this.about_fundingagency_goal = data.about_fundingagency_goal;
  this.about_fundingagency_achievement_main =
    data.about_fundingagency_achievement_main;
  this.about_fundingagency_achievement_small =
    data.about_fundingagency_achievement_small;
};

Coordinator_about_fundingagency.findAll = (result) => {
  sql.query("SELECT * FROM coordinator_about_fundingagency", 
  (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("coordinator_about_fundingagency: ", res);
    result(null, res);
  });
};

Coordinator_about_fundingagency.create = (newData, result) => {
  sql.query(
    `INSERT INTO coordinator_about_fundingagency 
  (
      about_fundingagency_name,
      about_fundingagency_institution,
      about_fundingagency_paln_master,
      about_fundingagency_paln_sub,
      about_fundingagency_platform,
      about_fundingagency_program,
      about_fundingagency_point,
      about_fundingagency_goal,
      about_fundingagency_achievement_main,
      about_fundingagency_achievement_small,
      created_date,
      updated_date
  ) 
  VALUE 
  (
  '${newData.about_fundingagency_name}',
  '${newData.about_fundingagency_institution}',
  '${newData.about_fundingagency_paln_master}',
  '${newData.about_fundingagency_paln_sub}',
  '${newData.about_fundingagency_platform}',
  '${newData.about_fundingagency_program}',
  '${newData.about_fundingagency_point}',
  '${newData.about_fundingagency_goal}',
  '${newData.about_fundingagency_achievement_main}',
  '${newData.about_fundingagency_achievement_small}',
  now(),
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

module.exports = Coordinator_about_fundingagency;
