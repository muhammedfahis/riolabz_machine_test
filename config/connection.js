const mongoClient = require('mongodb').MongoClient


const state ={
    db:null
}


module.exports.connect = function (done){
  const   url = 'mongodb+srv://Muhammedfahis:2585832000v@cluster0.uk8po.mongodb.net/products?retryWrites=true&w=majority';
  // const   url = 'mongodb://localhost:27017';

  const   dbName= 'products'


  mongoClient.connect(url,{useNewUrlParser:true,useUnifiedTopology:true},(err,data)=>{
    if (err) return done(err)
    state.db = data.db(dbName)

  })
  done()
}

module.exports.get = function(){
    return state.db
}