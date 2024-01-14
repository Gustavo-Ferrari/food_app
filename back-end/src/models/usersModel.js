const db = require("../database");
const bcrypt = require('bcrypt');

exports.getAllUsers = () => {
  return db.query(`select id, name, email from public.users`);
};

exports.getUserById = async (id) => {
  try {
    const user = await db.query(
      `select id, name, email from public.users where id = $1`, [id]
      );
    return user.rows;
  } catch (error) {
    return {
      message: error.message,
      stack: error.stack
    };
  }
};

exports.verifyUser = async ({email, password}) => {
  try {
    const user = await db.query(
      `select * from public.users where email = $1`, [email]
      );
      
    if (user.rows.length === 0) {
      return {
        message: 'Invalid credientials'
      };
    }
    const match = await bcrypt.compare(password, user.rows[0].password);
    if (!match) {
      return {
        message: 'Invalid credientials'
      };
    }
    return user.rows[0];
  } catch (error) {
    return {
      message: error.message,
      stack: error.stack
    };
  }
}
