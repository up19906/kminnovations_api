module.exports = (app) => {
    const co_researcher = require("../controllers/co_researcher.controller");
  
    app.get("/api/get/co-researcher", co_researcher.findAll);

  };
  