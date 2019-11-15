const express = require('express')
const mongoose = require('mongoose')
const colors = require('colors')
const bodyParser = require('body-parser')

const app = express();

const PORT = process.env.PORT | 3000;

//Body parser for transform data to json format of body
//parse aplucation/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

//parse aplication/json
app.use(bodyParser.json());

//Routes Import
app.use(require('./routes/index.routes'))


//Mongoose's Settings 
mongoose.connect('mongodb://localhost:27017/Restaurantio', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}, (err, res) => {
    if (err) throw err;

    console.log('Base de datos:', 'ONLINE'.blue);
});

app.listen(PORT, (err) => {
    console.log('Escuchando en el puerto:', `${PORT}`.blue);
})