const sql = require("./db.js");

// constructor
const coordinator_research_team = function (data) {
  this.coordinator_research_team_id = data.coordinator_research_team_id;
  this.coordinator_research_team_name = data.coordinator_research_team_name;
};

coordinator_research_team.findAll = (result) => {
  sql.query("SELECT * FROM coordinator_research_team", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("coordinator_research_team: ", res);
    result(null, res);
  });
};

module.exports = coordinator_research_team;
