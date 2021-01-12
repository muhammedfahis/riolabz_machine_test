const express = require('express');
const router = express.Router();

const {addProducts} = require('../controllers/products')

router.post('/upload',addProducts);
router.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})


module.exports =router