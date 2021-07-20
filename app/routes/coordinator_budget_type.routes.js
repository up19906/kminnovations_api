module.exports = (app) => {
  const coordinator_budget_type = require("../controllers/coordinator_budget_type.controller");

  app.get("/api/get/coordinator_budget_type", coordinator_budget_type.findAll);
};
