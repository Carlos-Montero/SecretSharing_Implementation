const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const bigInt = require ('big-integer');
const crypto = require ('crypto');

//import java.math.*;
//https://github.com/lengstrom/Polynomial-Problem-Generator/blob/master/mathlib.js    PARA HACER EL POLINOMIO
//https://github.com/alevy/jsss para hacer polinomio, shamir secret sharing y lagrange



var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



//ENDPOINTS

//Endpoint /clientparams
app.post('/clientparams', function(req, res){
    var p = bigInt(req.body.p)
    var k = bigInt(req.body.k);
    var n = bigInt(req.body.n);
    var t = bigInt(req.body.t);

    //****************************************************************DUDA***************
    //desencriptamos el mensaje recibido del cliente
    var decipher = crypto.createDecipher('aes192', key.toString(16));
    mDecrypted = decipher.update(mEncrypted, 'hex', 'utf8');
    mDecrypted += decipher.final('utf8');
    //console.log("El mensaje del cliente desencriptado es: ", mDecrypted);
    //res.status(200).send("ok")
    //***********************************************************************************

    //generaamos el polinomio de grado t-1 random con coeficientes random
















    //Share distribution, distribuir la clave entre los n share holders
    for (i = 0; i < n; i++) {
        // creamos las diferentes partes de la clave





    };



    //Recover K using Lagrange interpolation






    console.log("El valor de K es:");

});

app.listen(4200);
console.log("Server listeneing on port 4200");