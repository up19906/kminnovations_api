const sql = require("./db.js");

// constructor
const concept_proposal = function (data) {
  this.concept_proposal_name = data.concept_proposal_name;
  this.concept_proposal_institution = data.concept_proposal_institution;
  this.concept_proposal_paln_master = data.project_type;
  this.concept_proposal_paln_sub = data.concept_sourcefund;
  this.concept_year = data.concept_year;
  this.concept_budget = data.concept_budget;
  this.concept_univercity_budget = data.concept_univercity_budget;
  this.concept_leader = data.concept_leader;
  this.user_idcard = data.user_idcard;
  this.concept_phone = data.concept_phone;
  this.concept_proposal_type = data.concept_proposal_type;
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
};

concept_proposal.create = (newData, result) => {
  sql.query(
    `INSERT INTO concept_proposal 
  (
    concept_proposal_type,
    concept_proposal_name,
    concept_proposal_paln_master,
    concept_proposal_paln_sub,
    concept_budget,
    concept_year,
    concept_univercity_budget,
    concept_leader,
    concept_phone,
    user_idcard,
    created_date
  ) 
  VALUE 
  (
  '${newData.concept_proposal_type}',
  '${newData.concept_proposal_name}',
  '${newData.concept_proposal_paln_master}',
  '${newData.concept_proposal_paln_sub}',
  '${newData.concept_budget}',
  '${newData.concept_year}',
  '${newData.concept_univercity_budget}',
  '${newData.concept_leader}',
  '${newData.concept_phone}',
  '${newData.user_idcard}',
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

module.exports = concept_proposal;
