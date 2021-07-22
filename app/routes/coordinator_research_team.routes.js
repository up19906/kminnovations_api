module.exports = (app) => {
    const coordinator_research_team = require("../controllers/coordinator_research_team.controller.js");
  
    app.get("/api/get/coordinator_research_team", coordinator_research_team.findAll);

  };
  