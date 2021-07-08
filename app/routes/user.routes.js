module.exports = app => {
    const users = require("../controllers/userinfo.controller.js");
  
    // Create a new Customer
    app.post("/users", users.create);

};
  