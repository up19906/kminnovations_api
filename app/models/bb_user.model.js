const sql = require("./db.js");

const findAllUser = (result) => {
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
        FROM bb_user as u`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("bb_user: ", res);
    result(null, res);
  });
};

module.exports = findAllUser;
