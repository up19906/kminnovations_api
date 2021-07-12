module.exports = (app) => {
    const us_publication = require("../controllers/us_publication.controller");
  
    app.get("/api/get/us-publication", us_publication.findAll);

  };
  