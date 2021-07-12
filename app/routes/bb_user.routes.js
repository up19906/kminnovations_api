module.exports = (app) => {
    const bb_user = require("../controllers/bb_user.controller");
  
    app.get("/api/get/bb-user", bb_user.findAll);

  };
  