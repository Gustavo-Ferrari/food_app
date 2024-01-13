const db = require("../database");

exports.getAllUsers = () => {
  return db.query(`select * from public.users`);
};

exports.getUserById = (id) => {
  return db.query(
    `select * from public.users where id = $1`, [id]
    )
    .then((result) => {
      return result.rows;
    })
    .catch((error) => {
      return {
        message: error.message,
        stack: error.stack
      };
    });
};
