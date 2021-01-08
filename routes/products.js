const express = require('express');
const router = express.Router();

const {addProducuts} = require('../controllers/products')

router.post('/upload',addProducuts);
router.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})


module.exports =router