const sql = require("./db.js");

const co_researcher = function (data) {
  this.co_researcher_name_th = data.co_researcher_name_th;
  this.coordinator_name_th = data.coordinator_name_th;
  this.co_researcher_phone = data.co_researcher_phone;
  this.co_researcher_latitude = data.co_researcher_latitude;
  this.co_researcher_longitude = data.co_researcher_longitude;
  this.co_researcher_group_id = data.co_researcher_group_id;
  this.user_idcard = data.user_idcard;
  //....
};

co_researcher.findAll = (result) => {
  sql.query(`SELECT * FROM co_researcher`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("co_researcher: ", res);
    result(null, res);
  });
};

co_researcher.create = (newData, result) => {
  sql.query(
    `INSERT INTO co_researcher 
  (
    co_researcher_name_th,
    coordinator_name_th,
    co_researcher_phone,
    co_researcher_latitude,
    co_researcher_longitude,
    co_researcher_group_id,
    created_date
  ) 
  VALUE 
  (
  '${newData.co_researcher_name_th}',
  '${newData.coordinator_name_th}',
  '${newData.co_researcher_phone}',
  '${newData.co_researcher_latitude}',
  '${newData.co_researcher_longitude}',
  '${newData.co_researcher_group_id}',
  now()
  )`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("created: ", { id: res.insertId, ...newData });
      result(null, { id: res.insertId, ...newData });
    }
  );
};

module.exports = co_researcher;
