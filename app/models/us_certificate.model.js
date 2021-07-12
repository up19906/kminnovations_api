const sql = require("./db.js");

const findAll = (result) => {
  sql.query(
        `SELECT * FROM us_certificate`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("us_certificate: ", res);
    result(null, res);
  });
};

module.exports = findAll;
