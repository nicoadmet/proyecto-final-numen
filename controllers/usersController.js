const usersController = {
  user1 (req, res) {
    res.send(`HOLA ${req.params.nombre} ${req.params.apellido}!!`) //send enviar contenid estatico o texto plano  
  },
  user2 (req, res) {
    res.json( {
      nombre: req.body.nombre,
      status: "success"
    })
  }
} 

  module.exports =  usersController 