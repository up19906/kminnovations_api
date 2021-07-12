module.exports = (app) => {
    const us_educational = require("../controllers/us_educational.controller");
  
    app.get("/api/get/us-educational", us_educational.findAll);

  };
  