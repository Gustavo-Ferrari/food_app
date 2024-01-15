const db = require("../database");
const bcryptjs = require('bcryptjs');

exports.getAllUsers = () => {
  return db.query(`select name, email from public.users`);
};

exports.getUserById = (id) => {
  return db.query(
    `select name, email from public.users where id = $1`, [id]
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

exports.verifyUser = async ({email, password}) => {
  try {
    const user = await db.query(
      `select name,password from public.users where email = $1`, [email]
      );
      if (user.rows.length === 0) {
        return false;
      }
    const match = await bcryptjs.compare(password, user.rows[0].password);
    if (!match) {
      return false;
    }
    return {name: user.rows[0].name};
  } catch (error) {
    return {
      message: error.message,
      stack: error.stack
    };
  }
}
