const express = require('express');
const app = express();
// middleware
/**
 * req Request --> Peticion
 * res Response --> Respuesta a las peticiones
*/
app.get('/',function(req,res){
  res.send('index de mi aplicacion');// envio de petición
});  // fin middleware

app.get('/login',function(req,res){
res.send('Login del sistema');
});
app.get('/acerca',function(req,res){
    res.send('Acerca de mi proyecto');
    });
    

// middleware que permite devolver una json
// nombre edad y colegio
app.get('/json',function(req,res){
   res.json({Nombre:'Juan Pérez'});
});



app.listen(5057,function(){
console.log("El servidor se encuentra corriendo");

});