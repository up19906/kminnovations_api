module.exports = (app) => {
    const coordinator_fundingagency_academic = require("../controllers/coordinator_fundingagency_academic.controller");
  
    app.post("/api/create/coordinator_fundingagency_academic", coordinator_fundingagency_academic.create)

    app.put("/api/update/coordinator_fundingagency_academic/:id", coordinator_fundingagency_academic.update);

    app.delete("/api/delete/coordinator_fundingagency_academic/:id", coordinator_fundingagency_academic.delete);
  
    app.get("/api/get/coordinator_fundingagency_academic", coordinator_fundingagency_academic.findAll)

    app.get("/api/get/coordinator_fundingagency_academic/:id", coordinator_fundingagency_academic.findById)
    
    app.get("/api/get/sum_coordinater_funding_budget_academic/:year_budget", coordinator_fundingagency_academic.sumYear)

    app.get("/api/get/count_coordinator_fundingagency_academic/:year", coordinator_fundingagency_academic.countByYear)
};
  