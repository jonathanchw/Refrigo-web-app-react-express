var express = require('express');
var router = express.Router();

const productos = require('../api/productos');
const { getItems } = require('../api/productos');




//http://localhost:9000/db

router.get('/', async  (req, res, next)=>{
  const todosLosProductos = await productos.getItems();
  res.status(200).json(todosLosProductos);
}
);




module.exports = router;