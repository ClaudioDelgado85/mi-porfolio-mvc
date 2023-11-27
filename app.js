const express=require('express');
const app=express();
const rutasMain=require('./routers/main.js')

app.use(express.static('public'));
app.use('/',rutasMain);

app.listen(3000,()=>{
    console.log('Servidor funcionando en el puerto 3000');
})