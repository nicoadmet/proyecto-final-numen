const {Remedies} = require('../models/pharmacy')

class ApiController {
    async getApi (req, res)  {
        const list = await Remedies.find(); //traer todo lo que tiene Remedies
        res.status(200).json(list) //guarda el resultado y lo muestra
    }

    async postApi (req, res)  {
        try {
            const newRemedy = new Remedies(req.body)
            await newRemedy.save()
            res.status(201).json(newRemedy) 
        } catch (error) {
            res.status(400).json(error)
        }
    }

    async putApi (req, res)  {
        try {
            
        } catch () {
            
        }
    }

    async deleteApi (req, res)  {
       
    }
}







module.exports = new ApiController 