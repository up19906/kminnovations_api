const sql = require("./db.js");

// constructor
const Source_funds = function (data) {
  this.source_funds_id = data.source_funds_id;
  this.source_funds_name = data.source_funds_name;
  this.created_by = data.created_by;
  this.created_date = data.created_date;
};

Source_funds.create = (newData, result) => {
  sql.query(
    "INSERT INTO source_funds(source_funds_name,created_by,created_date) VALUES(?,?,?)",
    [
      newData.source_funds_name,
      // project_id,
      // concept_proposal_id,
      // coordinater_funding_id,
      // coordinater_budgetall_id,
      newData.created_by,
      newData.created_date,
      // updated_by,
      // updated_date,
    ],
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
}

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

Source_funds.findOne = (id, result)=>{
  sql.query(`SELECT * FROM source_funds WHERE source_funds_id = ${id}`, (err, res) => {
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
  });
}

module.exports = Source_funds;
