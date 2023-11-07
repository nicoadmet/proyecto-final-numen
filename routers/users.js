const express = require('express');
const router = express.Router(); //segmentar una ruta
const usersController = require('../controllers/usersController')


router.get('/usuario/:nombre/:apellido', usersController.user1) //funciona 

router.post('/crear-usuario', usersController.user2)

  

  module.exports = router