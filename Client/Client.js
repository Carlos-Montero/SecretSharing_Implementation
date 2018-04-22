const request = require('request');
const bigInt = require ('big-integer');
const crypto = require ('crypto');


//******************LO QUE HACE EL CLIENTE ES: CREA LOS VALORES Y LOS ENVIA AL SERVER********************



/*
request({
        uri: 'http://localhost:4200/clientparams',
        method: "POST",
        timeout: 10000,
        followRedirect: true,
        maxRedirects: 10
    },

    function(error, response, body) {

        if (error)
            console.log("error")
        else{
*/


            //creamos las variables n, t, k, p, que el cliente enviará al server

            //creamos p
            var p = (27);    //tendria que ser random y prime   FALTA ACABAR


            //creamos k, donde k < p
            var k = bigInt.randBetween(bigInt(1),p.minus(1));

            //creamos n
            var n = bigInt.randBetween(bigInt(2),bigInt(100));

            //creamos t, donde t < n
            var t = bigInt.randBetween(bigInt(1),n.minus(1));

            console.log("Los valores que utilizamos son p:",p,", k:",k,", n:",n,", t:",t);


            //AHORA, LE PASAMOS ESTOS VALORES AL SERVER

            //encrypt message
            var cipher = crypto.createCipher('aes192', key.toString(16));
            var encrypted = cipher.update(text, 'utf8', 'hex');
            encrypted += cipher.final('hex');

            //hacemos un mensaje que contendrá los valores creados préviamente
            var  message = {};
            message.message = encrypted;
            message.p = p;
            message.k = k;
            message.n = n;
            message.t = t;

            //hacemos el POST contra el endpoint /clientparams
            request({
                url: 'http://localhost:4200/clientparams',
                method: 'POST',
                body: message,
                json: true
            }, function(error, response, body){
                if (error)
                    console.log("error")
                else
                    console.log(body);
            });

/*
        }

    });
*/
