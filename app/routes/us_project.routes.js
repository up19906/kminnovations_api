module.exports = (app) => {
    const us_project = require("../controllers/us_project.controller");
  
    app.get("/api/get/us-project", us_project.findAll);

  };
  