const express = require('express');
const router = express.Router(); //segmentar una ruta
const apiController = require('../controllers/apiController');
const {check} = require('express-validator');
const { presoExiste, validarCampos } = require('../middlewares/validator');


router.get('/', apiController.getPrisoners)

router.post('/crear',
[
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("nroPreso", "El número de preso debe tener mínimo 4 caracteres ").isLength({
        min:4,
    }),
    check("nroPreso").custom(presoExiste),
    validarCampos,

],apiController.postPrisoners)

router.put('/:id', apiController.putPrisoners)

router.delete('/:id', apiController.deletePrisoners)




module.exports = router