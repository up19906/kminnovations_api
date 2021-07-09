const sql = require("./db.js");

// constructor
const Source_funds = function (data) {
  this.source_funds_id = data.source_funds_id;
  this.source_funds_name = data.source_funds_name;
};

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

module.exports = Source_funds;
