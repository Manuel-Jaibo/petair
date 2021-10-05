const express = require('express');
const app = express();
const path = require('path');
const stripe = require('stripe')('sk_test_51JPYCeHFCi9i6ITjfF6fRqqupDEA9FGrvFCZFPGfO0xdDdbSMgmgbvo45aFICJ8eZa1jKiTz5jnV7Xc2GLxfpCLg00k6vtT2Gh');
const nodemailer = require('nodemailer');


//Código para vincular servidor o si no el localhost
app.set('port', process.env.PORT || 3000);


// Configuración y definición de templete engine ejs
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


//Import Routes
const rutaNosotros = require('./routes/nosotros');

//MIDDLEWARE
app.use(express.json());
app.use(express.static('./static'));
app.use('/nosotros', rutaNosotros);


// Ruta Homepage
app.get('/', (req, res) => {
      res.render("index")
});


app.get('/cotizador', (req, res) => {
  res.render("cotizador")
});

// app.get('/mail', (req, res) => {
//   res.render("mail")
// });




//Ruta para errores 404
// app.use((req, res, next) => {
//   res.status(404).sendFile(__dirname + "/frontend/404.html")
// })


//Empezar 
app.listen(app.get('port'), () => {
  console.log(`servidor en puerto ${app.get('port')}`);
});



