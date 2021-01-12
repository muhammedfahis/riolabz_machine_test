const xlstojson = require("xls-to-json-lc");
const xlsxtojson = require("xlsx-to-json-lc");

const importExcel = (file) => {
  return new Promise((resolve, reject) => {
      let products =["asdf"];
    
    try {
      if(file.originalname.split('.')[file.originalname.split('.').length-1] === 'xlsx'){
          exceltojson = xlsxtojson;
      } else {
          exceltojson = xlstojson;
      }
     exceltojson(
        {
          input: file.path,
          output: null,
          lowerCaseHeaders: true,
        },
         function (err, results) {
          if (err) {
            return { error_code: 1, err_desc: err, data: null };
          }
          
          products = results
          resolve(products);
        //   console.log(products);
         
        });
      
    } catch (error) {
        reject(error)
      return {
        message: "ERROR IMPORTING EXCEL",
      };
    }
    return products
      
  })
  
  
  
  
};
module.exports = { importExcel };
