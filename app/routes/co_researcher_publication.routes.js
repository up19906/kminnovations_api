module.exports = (app) => {
    const co_researcher_publication = require("../controllers/co_researcher_publication.controller");
  
    app.get("/api/get/co-researcher-publication", co_researcher_publication.findAll);

  };
  