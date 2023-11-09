const express = require('express');
const router = express.Router(); //segmentar una ruta
const apiController = require('../controllers/apiController');


router.get('/datos', apiController.getPrisoners)
router.post('/crear', apiController.postPrisoners)
router.put('/actualizar', apiController.putPrisoners)
router.delete('/eliminar', apiController.deletePrisoners)




module.exports = router