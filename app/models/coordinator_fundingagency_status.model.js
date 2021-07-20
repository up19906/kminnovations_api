const sql = require("./db.js");

const findAll = (result) => {
  sql.query(`SELECT * FROM coordinator_fundingagency_status`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("coordinator_fundingagency_status: ", res);
    result(null, res);
  });
};

module.exports = { findAll: findAll };
