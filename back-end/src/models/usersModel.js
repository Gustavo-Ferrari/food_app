const db = require("../database");
const bcrypt = require('bcrypt');
const saltRounds = 10;

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

exports.verifyUser = async ({email, password}) => {
  try {
    const user = await db.query(
      `select * from public.users where email = $1`, [email]
      );
      console.log('user', user.rows); 
      
      if (user.rows.length === 0) {
        return false;
      }
    const match = await bcrypt.compare(password, user.rows[0].password);
    if (!match) {
      return false;
    }
    return user.rows[0];
  } catch (error) {
    return {
      message: error.message,
      stack: error.stack
    };
  }
}
