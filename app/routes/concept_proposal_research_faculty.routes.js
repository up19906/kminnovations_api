module.exports = (app) => {
    const concept_proposal_research_faculty = require("../controllers/concept_proposal_research_faculty.controller");
  
    app.get("/api/get/concept_proposal_research_facultys", concept_proposal_research_faculty.findAll);

    app.get("/api/get/concept_proposal_research_faculty", concept_proposal_research_faculty.findCondition);
  };
  