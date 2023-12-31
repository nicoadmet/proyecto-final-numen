const {Schema, model} = require('mongoose')

const schema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    nroPreso: {
        type: Number,
        required: true
    },
    condena: {
        type: String,
        required: true
    },
    delito: {
        type: String,
        required: true
    }
})

const Prisoners = model('Prisoner', schema);
module.exports = {Prisoners}