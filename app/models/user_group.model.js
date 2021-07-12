const sql = require("./db.js");

// constructor
const User_group = function (data) {
  this.group_id = data.group_id;
  this.group_name = data.group_name;
  this.group_detai = data.group_detai
};

User_group.findAll = (result) => {
  sql.query("SELECT * FROM user_group", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("user_group: ", res);
    result(null, res);
  });
};

module.exports = User_group;
