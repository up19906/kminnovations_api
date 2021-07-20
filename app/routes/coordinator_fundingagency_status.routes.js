module.exports = (app) => {
    const coordinator_fundingagency_status = require("../controllers/coordinator_fundingagency_status.controller");
  
    app.get("/api/get/coordinator_fundingagency_status", coordinator_fundingagency_status.findAll);
  
  };
  