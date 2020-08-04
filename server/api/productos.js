const db = require('../models/');
const getItems = async () => {
  const items = await db.items.findAll({ include: db.categorias })
    .then(res => {
      return res;
    });
  return items
};

module.exports = { getItems };

