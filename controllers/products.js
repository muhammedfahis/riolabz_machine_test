const express = require("express");
const xlstojson = require("xls-to-json-lc");
const xlsxtojson =require('xlsx-to-json-lc');
const xlsx = require('xlsx');
const fs = require("fs");
const db = require("../config/connection");
const COLLECTION = require("../config/collections");
const objectId = require('mongodb').ObjectID;
const multer = require('multer');




var Storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./public/excels");
  },
  filename: function (req, file, callback) {
    callback(
      null,
      file.fieldname + "_" + Date.now() + "_" + path.extname(file.originalname)
    );
  },
});

// paypal config

var upload = multer({
  storage: Storage,
}).single("file");


let products = [];
let category= [];
let brand = [];




const addProducuts = async(req,res) =>{
  var exceltojson;
  console.log(req.files);
  upload(req,res,function(err){
      if(err){
           res.json({error_code:1,err_desc:err});
           return;
      }
      /** Multer gives us file info in req.file object */
      if(!req.files){
          res.json({error_code:1,err_desc:"No file passed"});
          return;
      }
      /** Check the extension of the incoming file and
       *  use the appropriate module
       */
      // if(req.file.originalname.split('.')[req.file.originalname.split('.').length-1] === 'xlsx'){
      // } else {
      //   exceltojson = xlstojson;
      // }
      exceltojson = xlsxtojson;
      try {
          exceltojson({
              input: req.file.filename,
              output: null, //since we don't need output.json
              lowerCaseHeaders:true
          }, function(err,result){
              if(err) {
                  return res.json({error_code:1,err_desc:err, data: null});
              }
              res.json({error_code:0,err_desc:null, data: result});
          });
      } catch (e){
          res.json({error_code:1,err_desc:"Corupted excel file"});
      }
  })
}

    


module.exports = {
  addProducuts,
};
