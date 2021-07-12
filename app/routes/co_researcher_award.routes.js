module.exports = (app) => {
    const co_researcher_award = require("../controllers/co_researcher_award.controller");
  
    app.get("/api/get/co-researcher-award", co_researcher_award.findAll);

  };
  