const User = require("../models/bb_user.model");

exports.singIn = (req, res) => {
  console.log(req.body);

  const user = new User({
    user_idcard: req.body.username,
    user_password: req.body.password,
  });

  User.signIn(
    user,
    (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while login.",
        });
      else
        res
          .status(200)
          .send(data);
    }
  );
};
