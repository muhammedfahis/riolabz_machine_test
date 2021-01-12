const multer = require("multer");
const { v4: uuidv4 } = require('uuid');
const { importExcel } = require("../libs/COMMONDB/importExcel");
const {
  getAllCategoriesDB,
  updateProductDB,
  getAllProductsDB,
  getAllBrandsDB,
  addSingleBrandDB,
  addMultipleBrandsDB,
  addSingleProductDB,
  AddSingleCategoryDB,
  addMultipleProductsDB,
  getManyCategoriesDB,
  getManyBrandsDB,
  addMultipleCategoryDB,
} = require("../libs/COMMONDB/db");

var storage = multer.diskStorage({
  //multers disk storage settings
  destination: function (req, file, cb) {
    cb(null, "./public/excels");
  },
  filename: function (req, file, cb) {
    var datetimestamp = Date.now();
    cb(
      null,
      file.fieldname +
        "-" +
        datetimestamp +
        "." +
        file.originalname.split(".")[file.originalname.split(".").length - 1]
    );
  },
});

var upload = multer({
  //multer settings
  storage: storage,
  fileFilter: function (req, file, callback) {
    //file filter
    if (
      ["xls", "xlsx"].indexOf(
        file.originalname.split(".")[file.originalname.split(".").length - 1]
      ) === -1
    ) {
      return callback(new Error("Wrong extension type"));
    }
    callback(null, true);
  },
}).single("file");





let products;




const addProducts = async (req, res) => {
  try {
    upload(req, res, async function (err) {
      if (err) {
        return { error_code: 1, err_desc: err };
      }
      if (!req.file) {
        return { error_code: 1, err_desc: "No file passed" };
      }

      products = await importExcel(req.file);
      
    });
    const brandId = uuidv4();
    const categoryId = uuidv4();
    
     products.map(async (product) => {
      const oldCategory = await getManyCategoriesDB(product["category"]);
      const oldBrand = await getManyBrandsDB(product["brand"]);
      if (oldCategory) {
        product['category'] = oldCategory['_id']     
      } else {
       const newCategory=  await AddSingleCategoryDB(product["category"]);
       product['category'] = newCategory.data.ops[0]['_id']
      }
      if (oldBrand) {
        product['brand'] =oldBrand['_id']   
      } else {
       const newBrand = await addSingleBrandDB(product["brand"]);
        product['brand'] =newBrand.ops[0]['_id']
      }

      const oldProduct = await getAllProductsDB(product['item']);
      console.log(oldProduct,'..................oldproduct.............');
     if(!oldProduct){
        addSingleProductDB(product);
     } else {
        updateProductDB(product['item'],product["pur_price"], product["mrp_price"]);
     }
    });
    res.json(products);
  } catch (error) {
    return {
      message: "ERROR IN UPLOADING FILE",
    };
  }
};

module.exports = {
  addProducts,
};
