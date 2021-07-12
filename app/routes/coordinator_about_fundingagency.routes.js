module.exports = (app) => {
  const coordinator_about_fundingagency = require("../controllers/coordinator_about_fundingagency.controller.js");

  app.get("/api/get/coordinator_about_fundingagency", coordinator_about_fundingagency.findAll);

  app.post("/api/get/coordinator_about_fundingagency", coordinator_about_fundingagency.create);
};
