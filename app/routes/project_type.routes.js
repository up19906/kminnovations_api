module.exports = (app) => {
    const project_type = require("../controllers/project_type.controller.js");
  
    app.get("/project-type", project_type.findAll);

  };
  