const express = require('express');
const router = express.Router(); //segmentar una ruta
const mathsController = require('../controllers/mathsController')


router.get('/dividir/:dividendo/:divisor', mathsController.maths1) //funciona

router.get('/suma/:valor1/:valor2', mathsController.maths2) //no funciona bien

router.get('/numeros', mathsController.maths3) //funciona

 



module.exports = router