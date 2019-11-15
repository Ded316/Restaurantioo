/**
 * id, nombre, descripcion, precio
 */
const mongoose = require('mongoose')
let Schema = mongoose.Schema;

let PlatoSchema = Schema({
    nombre: {
        type: String,
        require: [true, 'El nombre del plato es necesario']
    },
    descripcion: {
        type: String,
        require: [true, 'Es necesaria una descripcion para el plato']
    },
    precio: {
        type: Number,
        require: [true, 'Es necesario un precio para el plato']
    }
})

module.exports = mongoose.model('Plato', PlatoSchema)