module.exports = (app) => {
    const pretent_type = require("../controllers/pretent_type.controller.js");
  
    app.get("/api/get/patent_type/:id", pretent_type.findOne);

  };
  