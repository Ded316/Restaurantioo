/**
 * id, arr_platos, mesa, fecha_emision, 
 * estado_preparacion (en cola| en proceso | finalizada), 
 * estado_aprobado, id_mozo, id_cliente
 */
const mongoose = require('mongoose')

let Schema = mongoose.Schema;

let PedidoSchema = Schema ({

    

    nombre: {
        type: String,
        require: [true, 'Se requiere nombre']
    },
    
    platos: {
        type: Array,
        default: []
    }


})

/*let PedidoSchema = Schema({
    mesa: {
        type: Number,
        require: [true, 'Numero de mesa necesario']
    },
    fecha_emision: {
        type: Date,
        require: [true, 'La fecha de emision es necesaria']
    },
    estado_preparacion: {
        type: String,
        require: [true, 'Es necesario un estado del pedido']
    },
    estado_aprobado: {
        type: Boolean,
        require: [true, 'Es necesario un estado de aprobacion']
    },
    id_emision: {
        type: String,
        require: [true, 'Se necesita un id de quien emitio el pedido']
    },
    es_modo: {
        type: Boolean,
        default: true
    },
    platos: {
        type: Array,
        default: []
    }


})*/

module.exports = mongoose.model('Pedido', PedidoSchema);