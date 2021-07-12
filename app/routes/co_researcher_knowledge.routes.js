module.exports = (app) => {
    const co_researcher_knowledge = require("../controllers/co_researcher_knowledge.controller");
  
    app.get("/api/get/co-researcher-knowledge", co_researcher_knowledge.findAll);

  };
  