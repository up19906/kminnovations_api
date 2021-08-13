const sql = require("./db.js");

// constructor
const Coordinator_fundingagency = function (data) {
  this.coordinater_funding_id = data.coordinater_funding_id;

  this.project_type_id = data.project_type_id;
  this.coordinater_funding_project_name = data.coordinater_funding_project_name;
  this.coordinator_project = data.coordinator_project;
  this.coordinater_funding_agency = data.coordinater_funding_agency;
  this.project_leader = data.project_leader;
  this.coordinater_funding_phone = data.coordinater_funding_phone;
  this.coordinater_funding_ac_research_team =
    data.coordinater_funding_ac_research_team;
  this.coordinator_fundingagency_status_id =
    data.coordinator_fundingagency_status_id;
  this.coordinater_funding_year = data.coordinater_funding_year;
  this.coordinater_funding_budget = data.coordinater_funding_budget;
  this.coordinater_funding_name = data.coordinater_funding_name;
  this.budget_id = data.budget_id;
  this.coordinator_univercity_budget = data.coordinator_univercity_budget;
  this.user_id = data.user_id;
  this.created_by = data.created_by;
  this.updated_by = data.updated_by;
};

Coordinator_fundingagency.create = (newData, result) => {
  sql.query(
    `INSERT INTO coordinator_fundingagency 
    (
      project_type_id,
      coordinater_funding_project_name , 
      coordinator_project,
      coordinater_funding_agency,
      project_leader,
      coordinater_funding_phone,
      coordinater_funding_ac_research_team,
      coordinator_fundingagency_status_id,
      coordinater_funding_year,
      coordinater_funding_budget,
      coordinater_funding_name,
      budget_id,
      coordinator_univercity_budget,
      user_idcard,
      created_by,
      created_date
    ) 
    VALUES(
      '${newData.project_type_id}',
      '${newData.coordinater_funding_project_name}',
      '${newData.coordinator_project}',
      '${newData.coordinater_funding_agency}',
      '${newData.project_leader}',
      '${newData.coordinater_funding_phone}',
      '${newData.coordinater_funding_ac_research_team}',
      '${newData.coordinator_fundingagency_status_id}',
      '${newData.coordinater_funding_year}',
      '${newData.coordinater_funding_budget}',
      '${newData.coordinater_funding_name}',
      '${newData.budget_id}',
      '${newData.coordinator_univercity_budget}',
      '${newData.user_id}',
      '${newData.created_by}',
      NOW()
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

Coordinator_fundingagency.update = (id, newData, result) => {
  sql.query(
    `UPDATE coordinator_fundingagency SET 
    project_type_id = '${newData.project_type_id}',
    coordinater_funding_project_name = '${newData.coordinater_funding_project_name}',
     coordinator_project ='${newData.coordinator_project}',
     coordinater_funding_agency = '${newData.coordinater_funding_agency}',
     project_leader = '${newData.project_leader}',
     coordinater_funding_phone = '${newData.coordinater_funding_phone}',
     coordinater_funding_ac_research_team = '${newData.coordinater_funding_ac_research_team}',
     coordinator_fundingagency_status_id = '${newData.coordinator_fundingagency_status_id}',
     coordinater_funding_year = '${newData.coordinater_funding_year}',
     coordinater_funding_budget = '${newData.coordinater_funding_budget}',
     coordinater_funding_name = '${newData.coordinater_funding_name}',
     budget_id = '${newData.budget_id}',
     coordinator_univercity_budget = '${newData.coordinator_univercity_budget}',
     updated_by = '${newData.updated_by}',
     updated_date = NOW()
     WHERE coordinater_funding_id = '${id}' `,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Data with the id
        result({ message: "not_found" }, null);
        return;
      }

      console.log("updated: ", { id: id, ...newData });
      result(null, { id: id, ...newData });
    }
  );
};

Coordinator_fundingagency.delete = (id, result) => {
  sql.query(
    "DELETE FROM coordinator_fundingagency WHERE coordinater_funding_id = ? ",
    id,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Data with the id
        result({ message: "not_found" }, null);
        return;
      }

      console.log("deleted Data with id: ", id);
      result(null, res);
    }
  );
};

Coordinator_fundingagency.findOne = (year, result) => {
  sql.query(
    `SELECT SUM(coordinater_funding_budget)sum FROM coordinator_fundingagency WHERE YEAR(coordinater_funding_year) = ${year}`,
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
    }
  );
};

Coordinator_fundingagency.findAll = (result) => {
  sql.query("SELECT * FROM coordinator_fundingagency", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("coordinator_fundingagency: ", res);
    result(null, res);
  });
};

Coordinator_fundingagency.findById = (id, result) => {
  sql.query(
    `SELECT * FROM coordinator_fundingagency WHERE coordinater_funding_id = ${id}`,
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
    }
  );
};

Coordinator_fundingagency.sumYearBudjet = (year, result) => {
  sql.query(
    `SELECT SUM(coordinater_funding_budget)sum FROM coordinator_fundingagency WHERE coordinater_funding_year = ${year}`,
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
    }
  );
};

Coordinator_fundingagency.countByYear = (year, result) => {
  sql.query(
    `SELECT * FROM coordinator_fundingagency WHERE coordinater_funding_year = ${year}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.length) {
        console.log("found: ", res);
        result(null, res);
        return;
      }

      result({ message: "not_found" }, null);
    }
  );
};

module.exports = Coordinator_fundingagency;
