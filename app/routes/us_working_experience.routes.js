module.exports = (app) => {
    const working_experience = require("../controllers/us_working_experience.controller");
  
    app.get("/api/get/working-experience", working_experience.findAll);

  };
  