const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

// parse requests of content-type: application/json
app.use(express.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res, next) => {
  res.send({ messge: "Hello World" });
});

require("./app/routes/user.routes")(app);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
