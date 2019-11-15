/**
 * 
 * GET : platos, pedidos
 * POST: pedidos
 * 
 */
const express = require('express')
const app = express();
//Import model for implement clients routes
const Plato = require('../models/plato.model')
const Pedido = require('../models/pedido.model')


app.get('/cliente/platos', (req, res) => {

    Plato.find({}, (error, platosDB) =>
    {
        if(error){
            res.status(400).json( {
                ok:false,
                error   
            })
        }
       
        res.json({
            ok:true,
            platosDB
        })

    })

})


app.get('/cliente/pedidos', (req, res)=>
{
    
    Pedido.find({}, (error, pedidosDB) => 
    {
        if(error){
            res.status(400).json( {
                ok:false,
                error
            })
        }
        res.json({
            ok:true,
            pedidosDB
        })
    })
    

})

app.post('/cliente/pedidos', (req, res) => {
    let pedido=req.body;
    console.log(pedido)
    res.send()
    const Ped=new Pedido({
        nombre: req.body.nombre,
        platos:[{
            nombre: req.body.platos
        }]
    })
    console.log(Ped)
   // const Pedido=new Pedido(pedido.nombre, pedido.platos)
})
/*router.post('/data', function(req, res){
    var data = new Data({
        name: req.body.name,
        price: req.body.price,
        array: [{
            name: req.body.array[0].name, 
            username: req.body.array[0].username,
            bio: req.body.array[0].bio,
            languages: [{language: req.body.array[0].languages[0].language}]
        }]...*/


module.exports = app;