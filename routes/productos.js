const { Router } = require('express');
const { check } = require('express-validator');
const { getProducto, getProductos } = require('../controllers/productos');
const { existeProductoPorId } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/', getProductos);

router.get('/:id',
[
    check('id').custom(existeProductoPorId), 
    validarCampos
],
 getProducto);





module.exports =  router;
