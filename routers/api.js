const express = require('express');
const router = express.Router(); //segmentar una ruta
const apiController = require('../controllers/apiController');


router.get('/', apiController.getPrisoners)
router.post('/crear', apiController.postPrisoners)
router.put('/:id', apiController.putPrisoners)
router.delete('/:id', apiController.deletePrisoners)




module.exports = router