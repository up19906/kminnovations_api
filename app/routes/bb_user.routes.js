const { authJwt } = require("../middleware");
const bb_user = require("../controllers/bb_user.controller");

module.exports = (app) => {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/get/bb-user", bb_user.findAll);

  app.get("/api/get/bb-user-v1", [authJwt.verifyToken], bb_user.findAll);

  app.get(
    "/api/get/bb-user-v2",
    [authJwt.verifyToken, authJwt.isAdmin],
    bb_user.findAll
  );
};
