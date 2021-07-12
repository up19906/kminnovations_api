module.exports = (app) => {
    const us_certificate = require("../controllers/us_certificate.controller");
  
    app.get("/api/get/us-certificate", us_certificate.findAll);

  };
  