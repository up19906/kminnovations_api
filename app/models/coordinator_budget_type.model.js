const sql = require("./db.js");

// // constructor
// const coordinator_budget_type = function (data) {
//   this.concept_proposal_name = data.concept_proposal_name;
//   this.concept_proposal_institution = data.concept_proposal_institution
//   //....
// };

const findAll = (result) => {
  sql.query(`SELECT * FROM coordinator_budget_type`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("coordinator_budget_type: ", res);
    result(null, res);
  });
};

module.exports = { findAll: findAll };
