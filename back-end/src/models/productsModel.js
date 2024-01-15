const db = require("../database");

exports.getAllProducts = () => {
  return db.query(`select * from public.products`);
};

exports.getProductById = (id) => {
  return db.query(
    `select * from public.products where id = $1`, [id]
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

exports.getRestaurantsByProductId = (id) => {
  return db.query(
    `SELECT r.* 
    FROM restaurants r 
    JOIN restaurants_products rp ON r.id = rp.restaurant_id
    where rp.product_id = $1`, [id])
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