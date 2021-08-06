module.exports = (app) => {
  const consept_proposal = require("../controllers/consept_proposal.controller");

  app.get("/api/get/concept_proposal", consept_proposal.findAll);

  app.post("/api/create/concept_proposal", consept_proposal.create);
  app.post(
    "/api/update/concpt_proposal_sub",
    consept_proposal.update_IDsubconcept
  );
};
