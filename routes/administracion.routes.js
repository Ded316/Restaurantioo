/**
 * GET: pedidos pendientes, 
 * UPDATE: aprobar pedido
 * 
 */
const express = require('express')
const app = express();
const Pedido = require('../models/pedido.model')
const Plato = require('../models/plato.model')

/**
 * Agregar modelo de datos para los mozos y los clientes, puesto que solicita realizar una consulta solicitando datos de ellos,
 * y al estar almacenados en nuestra DB tenemos que buscarlos, definir los modelos
 */

//Agregar rutes correspondientes a las acciones a realizaarse 



module.exports = app;