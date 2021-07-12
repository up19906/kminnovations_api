module.exports = (app) => {
    const co_researcher_publication_type = require("../controllers/co_researcher_publication_type.controller");
  
    app.get("/api/get/co-researcher-publication-type", co_researcher_publication_type.findAll);

  };
  