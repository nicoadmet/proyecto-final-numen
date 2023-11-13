const {validationResult} = require('express-validator');
const { Prisoners } = require('../models/prison');

const validarCampos = (res, req, next) =>{
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({errores: errors.array()})
    } 
    next();
    
};

const presoExiste = async(nroPreso) => {
    const preso = await Prisoners.findOne({nroPreso});

    if(preso){
        throw new Error("El preso ya esta registrado")
    }
}



module.exports = { validarCampos, presoExiste }