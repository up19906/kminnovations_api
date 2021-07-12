const sql = require("./db.js");

// constructor
const concept_proposal = function (data) {
  this.concept_proposal_name = data.concept_proposal_name;
  this.concept_proposal_institution = data.concept_proposal_institution
  //....
};

concept_proposal.findAll = (result) => {
    sql.query(`SELECT * FROM concept_proposal`, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }

        console.log("concept_proposal: ", res);
        result(null, res);
    
      });
}

module.exports = concept_proposal;