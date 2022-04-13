const express = require('express');
  
/* Creates an Express application. 
   The express() function is a top-level 
   function exported by the express module.
*/
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
  
  
 
app.get('/testdata', (req, res, next) => {
    console.log("TEST endpoint :");    
    res.send("funciona")
})
  
// Require the Routes API  
// Create a Server and run it on the port 3000
const server = app.listen(3000, function () {
    console.log("Iniciado 3000")
    let host = server.address().address
    let port = server.address().port
    // Starting the Server at the port 3000
})