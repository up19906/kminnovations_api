const sql = require("./db.js");

const findAll = (result) => {
  sql.query(
        `SELECT us.project_latitude, us.project_Longitude 
          FROM us_project us 
            WHERE us.project_latitude IS NOT NULL 
            AND us.project_Longitude IS NOT NULL `, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("us_project: ", res);
    result(null, res);
  });
};

module.exports = findAll;
