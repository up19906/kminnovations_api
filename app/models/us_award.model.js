const sql = require("./db.js");

const findAll = (result) => {
  sql.query(
        `SELECT * FROM us_award`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("us_award: ", res);
    result(null, res);
  });
};

module.exports = findAll;
