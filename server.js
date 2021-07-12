const express = require("express");
const app = express();
const fileUpload = require("express-fileupload");

const cors = require("cors");
app.use(cors());

app.use(fileUpload());

// parse requests of content-type: application/json
app.use(express.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res, next) => {
  res.send({ messge: "Hello World.." });
});

require("./app/routes/coordinator_about_fundingagency.routes")(app);
require("./app/routes/coordinator_fundingagency_project.routes")(app);
require("./app/routes/project_type.routes")(app);
require("./app/routes/source_funds.routes")(app);
require("./app/routes/pretent_type.routes")(app);
require("./app/routes/consept_proposal.routes")(app);
require("./app/routes/user_group.routes")(app);
require("./app/routes/coordinator_fundingagency.routes")(app);
require("./app/routes/coordinator_fundingagency_academic.routes")(app);

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
