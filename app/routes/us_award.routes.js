module.exports = (app) => {
    const us_award = require("../controllers/us_award.controller");
  
    app.get("/api/get/us-award", us_award.findAll);

  };
  