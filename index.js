const express = require('express');
const bodyParser= require('body-parser');
const db = require('./config/connection');
const fileUpload = require('express-fileupload');
const path = require('path');

const productRoutes = require('./routes/products.js')

const app =  express();
const PORT = process.env.PORT || 5000



db.connect((err)=>{
    if(err) console.log(err);
    else console.log('db connection succuss');
});

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded( {limit:'30mb',extended:true}));
// app.use(fileUpload());
// app.set(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',productRoutes)



  app.listen(PORT,()=>console.log(`server is running on port ${PORT}`));
  