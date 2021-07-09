module.exports = (app) => {
    const coordinator_fundingagency_project = require("../controllers/coordinator_fundingagency_project.controller.js");
  
    // app.get("/test", coordinator_fundingagency_project.findAll);
  
    app.post("/project", coordinator_fundingagency_project.create);
  };
  