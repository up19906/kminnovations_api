const sql = require("./db.js");

const findAll = (result) => {
  sql.query(
        `SELECT * FROM co_researcher_expertise`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("co_researcher_expertise: ", res);
    result(null, res);
  });
};

module.exports = findAll;
