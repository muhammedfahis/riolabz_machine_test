const multer = require("multer");

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




let category = [];
let brand = [];
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
    
    await products.map(async (product) => {
      const oldCategories = await getManyCategoriesDB(product["category"]);
      const oldBrands = await getManyBrandsDB(product["brand"]);
      if (oldCategories.length && oldCategories.length !== 0) {
        category.push(oldCategories);
        const newCategory =await oldCategories.filter(
          (item) => product["category"] !== item["category"]
        );

         await addMultipleCategoryDB(newCategory);
      } else {
         await AddSingleCategoryDB(product["category"]);
      }
      if (oldBrands.length && oldBrands.length !== 0) {
        brand.push(oldBrands);
        const newBrand =await oldBrands.filter(
          (item) => product["brand"] !== item["brandName"]
        );
          
         await addMultipleBrandsDB(newBrand);
      } else {
        await addSingleBrandDB(product["brand"]);
      }
    });

    const brands = await getAllBrandsDB();
    const categories = await getAllCategoriesDB();
    const oldProducts = await getAllProductsDB();
    await products.map(async (product) => {
     
      await categories.map( (category) => {
        if (category["category"] === product["category"]) {
          product["category"] = category["_id"];
        }
      });
      await  brands.map(async (brand) => {
        if (brand["brandName"] === product["brand"]) {
          product["brand"] = brand["_id"];
        }
      });
      const newProducts =await oldProducts.filter(item =>item['item'] !== product['item'])
      console.log(newProducts);
      if(!newProducts.length){
        await addSingleProductDB(product);
      }else{
        newProducts.map(async newPro =>{
      if ( newPro['item'] === product["item"]) {
        await addSingleProductDB(product);
      } else {
        await updateProductDB(product['item'],product["pur_price"], product["mrp_price"]);
      }
    })
  }
    })
    
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
