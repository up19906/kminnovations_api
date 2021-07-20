const sql = require("./db.js");

const findAll = (result) => {
  sql.query(`SELECT * FROM concept_proposal_research_faculty`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("concept_proposal_research_faculty: ", res);
    result(null, res);
  });
};

const findCondition = (data, result) => {
  const { fname, lname, idcard } = data;

  let condition_fname = fname ? `'%${fname}%'` : null;
  let condition_lname = lname ? `'%${lname}'%` : null;
  let condition_idcard = idcard ? `'%${idcard}%'` : null;

  sql.query(
    `SELECT * 
    FROM concept_proposal_research_faculty 
     WHERE research_faculty_idcrad LIKE ${condition_idcard} 
     OR research_faculty_username LIKE ${condition_fname}
     OR research_faculty_lastname LIKE ${condition_lname}
     GROUP BY research_faculty_id`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.length == 0) {
        // not found Data
        result({ message: "not_found" }, null);
        return;
      }

      console.log("concept_proposal_research_faculty: ", res);
      result(null, res);
    }
  );
};

module.exports = { findAll: findAll, findCondition: findCondition };
