module.exports = (app) => {
    const source_funds = require("../controllers/source_funds.controller");
  
    app.get("/api/get/source_funds", source_funds.findAll);

    app.get("/api/get/source_funds/:id", source_funds.findOne);

    app.post("/api/create/source_funds", source_funds.create);
  };
  