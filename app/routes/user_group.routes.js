module.exports = (app) => {
    const user_group = require("../controllers/user_group.controller");
  
    app.get("/api/get/user_group", user_group.findAll);

  };
  