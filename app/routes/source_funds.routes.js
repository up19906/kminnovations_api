module.exports = (app) => {
    const source_funds = require("../controllers/source_funds.controller");
  
    app.get("/source-funds", source_funds.findAll);

  };
  