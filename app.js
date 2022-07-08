const express = require('express');
const path = require('path');
const app = express();

// middlewares

// const publicFolderPath = path.resolve(__dirname,  './public'); // esta linea se puede hacer tambien asi

const publicFolderPath = path.resolve(__dirname + '/public');  

app.use(express.static(publicFolderPath));               
 
// app.use(express.static(__dirname + '/public'));  // si funciona


//rutas: get, post, put, delete

// servidor en puerto 3001

//app.listen (3001, () => console.log("Servidor escuchando en puerto 3001"));

app.set('puerto', process.env.PORT || 3000);

// app.listen listo para heroku

//app.listen(process.env.PORT || 3000, function() {
//    console.log('Servidor corriendo en puerto 3000');
//})
app.set(express.urlencoded ( { extended : false })); // para post
app.set(express.json());    // para el post

app.listen(app.get('puerto'), ()=>console.log(`Servidor escuchando en puerto ${app.get('puerto')}`));


app.get('/', (req, res) => {
    let htmlPath = path.resolve(__dirname + '/views/home.html');
    res.sendFile(htmlPath)
});


app.get('/register', (req, res) => {
    let htmlPath = path.resolve(__dirname + '/views/register.html');
    res.sendFile(htmlPath)
});


app.get('/login', (req, res) => {
    let htmlPath = path.resolve(__dirname + '/views/login.html');
    res.sendFile(htmlPath)
});

