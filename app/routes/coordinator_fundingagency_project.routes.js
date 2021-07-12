module.exports = (app) => {
    const coordinator_fundingagency_project = require("../controllers/coordinator_fundingagency_project.controller.js");
  
    app.get("/api/get/coordinator_fundingagency_project", coordinator_fundingagency_project.findAll);
  
    app.post("/api/get/coordinator_fundingagency_project", coordinator_fundingagency_project.create);
  };
  