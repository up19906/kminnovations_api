const sql = require("./db.js");

// constructor
const Coordinator_fundingagency = function (data) {
  this.coordinater_funding_id = data.coordinater_funding_id;
  this.funding_project_name = data.funding_project_name;
  this.coordinator_project= data.coordinator_project;
  this.funding_agency= data.funding_agency;
  this.funding_project_leader= data.funding_project_leader;
  this.funding_phone =data.funding_phone;
  this.funding_year =data.funding_year;
  this.funding_budget = data.funding_budget;
  this.funding_name = data.funding_name;
  this.coordinator_univercity_budget= data.coordinator_univercity_budget;
  this.funding_user_id=data.funding_user_id;
  this.funding_created_by= data.funding_created_by;
  this.funding_created_date= data.funding_created_date;
  this.funding_updated_by= data.funding_updated_by;
  this.funding_updated_date=data.funding_updated_date;    
  //....
};

Coordinator_fundingagency.create = (newData, result) => {
  sql.query(
    "INSERT INTO coordinator_fundingagency (coordinater_funding_project_name , coordinator_project,coordinater_funding_agency,project_leader,coordinater_funding_phone,coordinater_funding_year,coordinater_funding_budget,coordinater_funding_name,coordinator_univercity_budget,user_idcard,created_by,created_date,updated_by,updated_date) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      newData.funding_project_name,
      newData.coordinator_project,
      newData.funding_agency,
      newData.funding_project_leader,
      newData.funding_phone,
      newData.funding_year,
      newData.funding_budget,
      newData.funding_name,
      newData.coordinator_univercity_budget,
      newData.funding_user_id,
      newData.funding_created_by,
      newData.funding_created_date,
      newData.funding_updated_by,
      newData.funding_updated_date,
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

Coordinator_fundingagency.update = (id, newData, result) => {
  sql.query(
    "UPDATE coordinator_fundingagency SET coordinater_funding_project_name = ?, coordinator_project = ?,coordinater_funding_agency = ?,project_leader = ?,coordinater_funding_phone = ? ,coordinater_funding_year = ?,coordinater_funding_budget = ? ,coordinater_funding_name = ? ,coordinator_univercity_budget = ? ,updated_by = ? ,updated_date = ? WHERE coordinater_funding_id = ? ",
    [
      newData.funding_project_name,
      newData.coordinator_project,
      newData.funding_agency,
      newData.funding_project_leader,
      newData.funding_phone,
      newData.funding_year,
      newData.funding_budget,
      newData.funding_name,
      newData.coordinator_univercity_budget,
      newData.funding_updated_by,
      newData.funding_updated_date,
      id,
    ],
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
}

Coordinator_fundingagency.delete = (id, result) => {
  sql.query("DELETE FROM coordinator_fundingagency WHERE coordinater_funding_id = ? ", 
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
  });

}

Coordinator_fundingagency.findOne = (year, result) => {
    sql.query(`SELECT SUM(coordinater_funding_budget)sum FROM coordinator_fundingagency WHERE YEAR(created_date) = ${year}`, 
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
    
      });
}

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
}

Coordinator_fundingagency.findById = (id, result) => {
  sql.query(`SELECT * FROM coordinator_fundingagency WHERE coordinater_funding_id = ${id}`, (err, res) => {
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
  
    });
}

Coordinator_fundingagency.sumYearBudjet = (year, result) => {
  sql.query(`SELECT SUM(coordinater_funding_budget)sum FROM coordinator_fundingagency WHERE coordinater_funding_year = ${year}`, (err, res) => {
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
  
    });
}

Coordinator_fundingagency.countByYear = (year, result) => {
  sql.query(`SELECT * FROM coordinator_fundingagency WHERE coordinater_funding_year = ${year}`, (err, res) => {
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
  
    });
}

module.exports = Coordinator_fundingagency;