const sql = require("./db.js");

// constructor
const Pretent_type = function (data) {
  this.patent_type_id = data.patent_type_id;
  this.patent_type_name = data.patent_type_name;
};

Pretent_type.findOne = (id, result) => {
    sql.query(`SELECT * FROM patent_type WHERE patent_type_id = ${id}`, (err, res) => {
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
    
        // console.log("patent_type: ", res);
        // result(null, res);
      });
}

module.exports = Pretent_type;