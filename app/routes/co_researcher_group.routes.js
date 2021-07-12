module.exports = (app) => {
    const co_researcher_group = require("../controllers/co_researcher_group.controller");
  
    app.get("/api/get/co-researcher-group", co_researcher_group.findAll);

  };
  