module.exports = (app) => {
    const co_researcher_knowledge_group = require("../controllers/co_researcher_knowledge_group.controller");
  
    app.get("/api/get/co-researcher-knowledge-group", co_researcher_knowledge_group.findAll);

  };
  