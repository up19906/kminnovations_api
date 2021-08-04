const sql = require("./db.js");
let md5 = require("md5");
const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");

const User = function (data) {
  this.user_idcard = data.user_idcard;
  this.user_password = data.user_password;
};

User.signIn = (data, result) => {
  console.log(data);
  sql.query(
    `SELECT u.user_idcard,user_first_name_th,user_last_name_th, u.user_password, r.role_name 
  FROM bb_user_role AS u_r
    INNER JOIN bb_user AS u ON u.user_idcard = u_r.user_idcard 
    INNER JOIN bb_role AS r ON r.role_id = u_r.role_id
  WHERE u.user_idcard = ${data.user_idcard}`,
    (err, res) => {
      if (err) {
        console.log(err);
        result(null, err);
        return;
      }

      if (res.length == 0) {
        // not found Data
        result({ message: "user_not_found" }, null);
        return;
      }

      let password_md5 = md5(data.user_password);
      console.log(password_md5);

      if (password_md5 != res[0].user_password) {
        result({ accessToken: null, message: "Invalid Password." }, null);
        return;
      }

      let token = jwt.sign({ id: res[0].user_idcard }, config.secret, {
        expiresIn: 86400, // 24 hours
      });

      let authorities = [];
      let resp = [];
      res.forEach((user) => {
        console.log(user);
        authorities.push("ROLE_" + user.role_name);
        resp.push({
          user_idcard: user.user_idcard,
          user_first_name_th: user.user_first_name_th,
          user_last_name_th: user.user_last_name_th,
          role_name: authorities,
          accessToken: token,
        });
      });
      console.log(resp);
      console.log(authorities);

      result(null, resp[0]);
    }
  );
};

User.findById = (id, result) => {
  sql.query(
    `SELECT * FROM bb_user u WHERE u.user_idcard = ${id}`,
    (err, res) => {
      if (err) {
        result(null, err);
        return;
      }

      result(null, res);
    }
  );
};

User.findOne = (id, next, result) => {
  console.log(id);
  sql.query(
    `SELECT u.user_idcard,user_first_name_th,user_last_name_th, u.user_password, r.role_name 
    FROM bb_user AS u 
      INNER JOIN bb_user_role AS ur ON ur.user_idcard = u.user_idcard
      INNER JOIN bb_role AS r ON r.role_id = ur.role_id
    WHERE u.user_idcard = ${id}`,
    (err, res) => {
      if (err) {
        result(null, err);
        return;
      }

      let arr = [];
      res.forEach((user) => {
        arr.push(user.role_name);
      });

      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Administrator") {
          next();
          return;
        }
      }

      result(null, { message: "Require Admin Role" });
      return;
    }
  );
};

User.findAllUser = (result) => {
  sql.query(
    `SELECT u.user_idcard , 
                u.user_first_name_th, 
                u.user_last_name_th,
                u.user_mobile,
                u.user_mail,
                u.user_executive,
                u.user_academic,
                u.user_image_user,
                u.user_section,
                u.user_organization,
                u.user_major 
        FROM bb_user as u`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      // console.log("bb_user: ", res);
      result(null, res);
    }
  );
};

module.exports = User;
