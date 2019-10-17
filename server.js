const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers.js');

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');



app.get('/', (req,res) => {
    
    res.render('home1', {
        nombre: 'RAYSER',
        anyo: new Date().getFullYear()
    });
    
});

app.get('/about', (req,res) => {
    
    res.render('about', {
        anyo: new Date().getFullYear()
    });
    
});


app.listen(port, () => {
    
    console.log(`Escuchando en puerto ${port}`)
});
 
