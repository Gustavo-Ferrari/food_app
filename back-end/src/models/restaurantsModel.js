const db = require("../database");

exports.getAllRestaurants = () => {
  return db.query(`select * from public.restaurants`)
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

exports.getRestaurantById = (id) => {
  return db.query(
    `select * from public.restaurants where id = $1`, [id]
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

exports.getRestaurantProductsById = (id) => {
  return db.query(
    `select r.id AS restaurant_id, r.name AS restaurant_name,
    p.id AS product_id
    from products p
    join restaurants_products rp on p.id = rp.product_id
    join restaurants r on r.id = rp.restaurant_id
    where r.id = $1`, [id]
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