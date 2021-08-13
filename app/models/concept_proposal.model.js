const sql = require("./db.js");

// constructor
const concept_proposal = function (data) {
  this.concpt_proposal_sub = data.concpt_proposal_sub;
  this.co_researcher_id = data.co_researcher_id;
  this.project_type_id = data.project_type_id;
  this.concept_proposal_name = data.concept_proposal_name;
  this.source_funds_id = data.source_funds_id;
  this.concept_year = data.concept_year;
  this.concept_budget = data.concept_budget;
  this.concept_univercity_budget = data.concept_univercity_budget;
  this.concept_leader = data.concept_leader;
  this.concept_phone = data.concept_phone;
  this.concept_proposal_type = data.concept_proposal_type;

  //update concpt_proposal_sub
  // this.concpt_proposal_sub = data.concpt_proposal_sub;
  // this.concept_proposal_id = data.concept_proposal_id;

  this.concept_proposal_institution = data.concept_proposal_institution;
  this.user_idcard = data.user_idcard;
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
    concpt_proposal_sub,
    co_researcher_id,
    project_type_id,
    concept_proposal_name_th,
    source_funds_id,
    concept_year,
    concept_budget,
    concept_univercity_budget,
    concept_leader,
    concept_phone,
    concept_proposal_type,
    created_date
  ) 
  VALUE 
  (
  '${newData.concpt_proposal_sub}',
  '${newData.co_researcher_id}',
  '${newData.project_type_id}',
  '${newData.concept_proposal_name}',
  '${newData.source_funds_id}',
  '${newData.concept_year}',
  '${newData.concept_budget}',
  '${newData.concept_univercity_budget}',
  '${newData.concept_leader}',
  '${newData.concept_phone}',
  '${newData.concept_proposal_type}',
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
