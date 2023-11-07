const express = require('express');
const router = express.Router(); //segmentar una ruta
const apiController = require('../controllers/apiController');
const bcryptjs = require('bcrypt');

router.get('/lista', apiController.getApi)
router.post('/crear', apiController.postApi)
router.put('/actualizar', apiController.putApi)
router.delete('/eliminar', apiController.deleteApi)




module.exports = router