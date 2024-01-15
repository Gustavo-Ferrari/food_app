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

exports.getProductsByRestaurantId = (id) => {
  return db.query(
    `select p.*
    from public.products p
    join public.restaurants_products rp on p.id = rp.product_id
    where rp.restaurant_id = $1`, [id]
    ).then((result) => {
      return result.rows;
    }).catch((error) => {
      return {
        message: error.message,
        stack: error.stack
      };
    });
  };