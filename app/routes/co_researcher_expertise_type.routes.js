module.exports = (app) => {
    const co_researcher_expertise_type = require("../controllers/co_researcher_expertise_type.controller");
  
    app.get("/api/get/co-researcher-expertise-type", co_researcher_expertise_type.findAll);

  };
  