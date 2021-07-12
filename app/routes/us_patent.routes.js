module.exports = (app) => {
    const us_patent = require("../controllers/us_patent.controller");
  
    app.get("/api/get/us-patent", us_patent.findAll);

  };
  