const {Prisoners} = require('../models/prison')

class ApiController {
    async getPrisoners (req, res)  {
        const list = await Prisoners.find(); //traer todo lo que tiene Prisioners

        res.status(200).json(list) //guarda el resultado y lo muestra
    }

    async postPrisoners (req, res)  {
        try {
            const newPrisioner = new Prisoners(req.body)
            await newPrisioner.save()
            res.status(201).json(newPrisioner) 

        } catch (error) {
            res.status(400).json(error)
        }
    }

    async putPrisoners (req, res)  {
        const {id} = req.params;

        const {nroPreso, condena, delito} = req.body;

        const prisionero = await Prisoner.findByIdAndUpdate(id, {$set:{nroPreso, condena, delito}})

        res.json({
            msg:"Prisionero actualizado"
        })
    }

    async deletePrisoners (req, res)  {
       
    }
}







module.exports = new ApiController 