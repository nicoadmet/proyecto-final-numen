const {Schema, model} = require('mongoose')

const schema = new Schema({
    remedio: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    vencimiento: {
        type: Boolean
    }
})

const Remedies = model('Remedy', schema);
module.exports = {Remedies}