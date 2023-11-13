const express = require('express');
const router = express.Router(); 
const apiController = require('../controllers/apiController');
const {check} = require('express-validator');
const { validarCampos } = require('../middlewares/validator');


router.get('/', apiController.getPrisoners)

router.post('/crear',
[
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    validarCampos,

],apiController.postPrisoners)

router.put('/:id', [
    check("id", "No es un ID válido").isMongoId(),
    validarCampos
],apiController.putPrisoners)

router.delete('/:id', apiController.deletePrisoners)




module.exports = router