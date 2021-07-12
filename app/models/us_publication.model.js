const sql = require("./db.js");

const findAll = (result) => {
  sql.query(
        `SELECT * FROM us_publication`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("us_publication: ", res);
    result(null, res);
  });
};

module.exports = findAll;
