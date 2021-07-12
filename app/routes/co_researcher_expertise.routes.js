module.exports = (app) => {
    const co_researcher_expertise = require("../controllers/co_researcher_expertise.controller");
  
    app.get("/api/get/co-researcher-expertise", co_researcher_expertise.findAll);

  };
  