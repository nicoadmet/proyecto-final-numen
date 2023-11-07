
const mathsController = {
  maths1  (req, res)  { 
    let num1 = Number(req.params.dividendo),
    num2 = Number(req.params.divisor);

    if (req.params.dividendo === 0 || req.params.divisor === 0) {
       return res.json({error: "no se puede dividir por cero"}) //json para enviar objetos etc
    } return res.json({resultado: req.params.dividendo / req.params.divisor })
  },

  maths2  (req, res)  {
    let num3 = Number(req.params.valor1),
    num4 = Number(req.params.valor2);

    if (req.params.valor1 > 0 || req.params.valor2 > 0) {
      return res.json({error: "no se puede enviar valores menores a 0"})
    } return res.json({resultado: req.params.valor1 + req.params.valor2})
  },

  maths3  (req, res)  {
    if (req.query.numero % 2 == 1) {
      return res.send("no autorizado")
    } return res.send("autorizado")
  }
}





  module.exports =  mathsController 