const sql = require("./db.js");

const Coordinator_fundingagency_academic = function (data) {
    this.funding_ac_name = data.funding_ac_name;
    this.funding_ac_project = data.funding_ac_project;
    this.funding_ac_agency = data.funding_ac_agency;
    this.funding_ac_leader = data.funding_ac_leader;
    this.funding_ac_phone = data.funding_ac_phone;
    this.funding_ac_year = data.funding_ac_year;
    this.funding_ac_budget = data.funding_ac_budget;
    this.funding_name = data.funding_name;
    this.coordinator_univercity_ac_budget = data.coordinator_univercity_ac_budget;
    this.funding_user_id = data.funding_user_id;
    this.funding_created_by = data.funding_created_by;
    this.funding_created_date = data.created_date;
  };

  Coordinator_fundingagency_academic.create = (newData, result) => {
    sql.query(
        "INSERT INTO coordinator_fundingagency_academic (coordinator_fundingagency_ac_name, coordinator_ac_project,coordinater_funding_ac_agency,project_ac_leader,coordinater_funding_ac_phone ,coordinater_funding_ac_year,coordinater_funding_ac_budget,coordinater_funding_ac_name, coordinator_univercity_ac_budget,user_idcard,created_by,created_date) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)",
        [
          newData.funding_ac_name,
          newData.funding_ac_project,
          newData.funding_ac_agency,
          newData.funding_ac_leader,
          newData.funding_ac_phone,
          newData.funding_ac_year,
          newData.funding_ac_budget,
          newData.funding_name,
          newData.coordinator_univercity_ac_budget,
          newData.funding_user_id,
          newData.funding_created_by,
          newData.funding_created_date,
          // funding_updated_by,
          // funding_updated_date,
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

  Coordinator_fundingagency_academic.update = (id, newData, result) => {
    sql.query(
        "UPDATE coordinator_fundingagency_academic SET coordinator_fundingagency_ac_name = ?, coordinator_ac_project= ?,coordinater_funding_ac_agency = ?,project_ac_leader= ?,coordinater_funding_ac_phone = ? ,coordinater_funding_ac_year= ?,coordinater_funding_ac_budget= ? ,coordinater_funding_ac_name= ? ,coordinator_univercity_ac_budget= ? ,updated_by = ? ,updated_date = ? WHERE coordinator_fundingagency_ac_id = ? ",
        [
          newData.funding_ac_name,
          newData.funding_ac_project,
          newData.funding_ac_agency,
          newData.funding_ac_leader,
          newData.funding_ac_phone,
          newData.funding_ac_year,
          newData.funding_ac_budget,
          newData.funding_name,
          newData.coordinator_univercity_ac_budget,
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

  Coordinator_fundingagency_academic.delete = (id, result) => {
    sql.query(
        "DELETE FROM coordinator_fundingagency_academic WHERE coordinator_fundingagency_ac_id = ?  ",
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
  
  }

  Coordinator_fundingagency_academic.findAll = (result) => {
    sql.query(
        "SELECT * FROM coordinator_fundingagency_academic ",
        (err, res) => {
            if (err) {
              console.log("error: ", err);
              result(null, err);
              return;
            }
        
            console.log("coordinator_fundingagency_academic: ", res);
            result(null, res);
          });
  }

  Coordinator_fundingagency_academic.findOne = (id, result) => {
    sql.query(
        "SELECT * FROM coordinator_fundingagency_academic WHERE coordinator_fundingagency_ac_id =? ",
        id,
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
}

Coordinator_fundingagency_academic.sumYearBudjet = (year, result) => {
    sql.query(`SELECT SUM(coordinater_funding_ac_budget)sum FROM coordinator_fundingagency_academic WHERE coordinater_funding_ac_year = ${year}`, (err, res) => {
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

  Coordinator_fundingagency_academic.countByYear = (year, result) => {
    sql.query(`SELECT * FROM coordinator_fundingagency_academic WHERE coordinater_funding_ac_year =  ${year}`, 
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

module.exports = Coordinator_fundingagency_academic;