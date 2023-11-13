const { validationResult } = require('express-validator');


const validarCampos = (res, req, next) =>{
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({errores: errors.array()})
    } 
    next();
    
};





module.exports = { validarCampos }