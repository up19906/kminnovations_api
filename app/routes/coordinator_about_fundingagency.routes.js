module.exports = (app) => {
  const coordinator_about_fundingagency = require("../controllers/coordinator_about_fundingagency.controller.js");

  app.get("/about-fundingagency", coordinator_about_fundingagency.findAll);

  app.post("/about-fundingagency", coordinator_about_fundingagency.create);
};
