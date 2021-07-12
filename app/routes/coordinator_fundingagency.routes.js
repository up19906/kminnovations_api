module.exports = (app) => {
    const coordinator_fundingagency = require("../controllers/coordinator_fundingagency.controller");
  
    app.get("/api/get/bb_user/:year", coordinator_fundingagency.findOne);

    app.get("/api/get/coordinator_fundingagency/:id", coordinator_fundingagency.findById);

    app.get("/api/get/coordinator_fundingagency", coordinator_fundingagency.findAll);

    app.get("/api/get/sum_coordinater_funding_budget/:year_budget", coordinator_fundingagency.sumYear);

    app.get("/api/get/count_coordinator_fundingagency/:year", coordinator_fundingagency.countByYear)

    app.put("/api/update/coordinator_fundingagency/:id", coordinator_fundingagency.update);

    app.post("/api/create/coordinator_fundingagency", coordinator_fundingagency.create);

    app.delete("/api/delete/coordinator_fundingagency/:id", coordinator_fundingagency.delete);
  };
  