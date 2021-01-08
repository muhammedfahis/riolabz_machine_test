let products = [];
let category= [];
let brand = [];


// const addProducuts = async (req, res) => {
 

//    xlsxtojson(
//     {
//       input: "./sample.xlsx",
//       output: "output.json",
//     },
//   async  function (err, results) {
//       if (err) throw err;
//       products.push(results);
//    })
//    products.forEach(async(result) => {
       
//     // const category = await db.get().collection(COLLECTION['CATEGORY']).find({Category:result['Category']}).toArray()
//     // const brand = await db.get().collection(COLLECTION['BRAND']).find({Brand:result['Brand']}).toArray()
    
// let singleProduct = {
//       ART_NO: result["ART_NO"],
//       "SKU ID": result["SKU ID"],
//       "Special Category": result["Special Category"],
//       Category: objectId(category._id),
//       Brand:objectId(brand._id),
//       Item: result["Item"],
//       DESCRIPTION: result["DESCRIPTION"],
//       "Pack size": result["Pack size"],
//       Pur_Price: result["Pur_Price"],
//       MRP_PRICE: result["MRP_PRICE"],
//     };
//     products.push(singleProduct);
//   });
//   console.log("products",products[0]);
//   db.get().collection(COLLECTION["PRODUCTS"]).insertMany(products).then((data) => {
//       console.log(data);
//      res.json(products[0]);
//     })
// // const categories =  db.get().collection(COLLECTION['CATEGORY']).aggregate([]).toArray()
// // .then((data)=>{
// //   console.log(data);
// // })
// // .catch(err =>{
// //   console.log(err);
// // })
// // const brands =  db.get().collection(COLLECTION['BRAND']).aggregate([]).toArray()
// // .then(data =>{
// //   console.log(data);
// // })
// // .catch(err =>{
// //   console.log(err);
// // })
// // console.log(categories);
// // console.log(brands);

// products.map( product =>{
   
// //     categories.map(item =>{
// //         if(item['category']!==product['Category']){
//             category.push({category:product.Category})
// //         }
// //     });

// //     brands.map(item =>{
// //         if(item['Brand'] !== product['Brand']){
//             brand.push({brand:product.Brand})
// //             }
// //     })
   
    
// })
// console.log(category);






// db.get().collection(COLLECTION['BRAND']).insertMany(brand)
// .then(()=>{
//     console.log('brand added');
// })
// .catch(err =>{
//   console.log(err);
// })
// db.get().collection(COLLECTION['CATEGORY']).insertMany(category)
// .then(()=>{
//     console.log('category added');
// })
// .catch(err =>{
//   console.log(err);
// })
//   }
















// //  const filePath = process.argv.slice(2)[0];
//  const workbook = xlsx.readFile(__dirname+'/sample.xlsx');
//  const worksheet = workbook.Sheets[workbook.SheetNames[0]];

//  const products =[];
//  let count = 0;
//  let product ={
//      "SKU ID": '',
//       "Special Category": '',
//       Category: '',
//       Brand:'',
//       Item: '',
//       DESCRIPTION:'',
//       "Pack size": '',
//       Pur_Price: '',
//       MRP_PRICE: '',
//  };
// //  console.log(worksheet);
//  for(let cell in worksheet){
//    const cellAsString = cell.toString();

   

//    if(cellAsString[1] !== 'r' &&
//       cellAsString !== 'm' && cellAsString[1]>1){
       
//         // if(cellAsString[0] === 'A'){
//         //   // const ART_NO = worksheet[cell].v;
//         //   product['ART_NO'] = worksheet[cell].v;
//         //   console.log(product['ART_NO']);
//         // }

//         if(cellAsString[0] === 'B' ){
//           // const SKU_ID = worksheet[cell].v;
//           product['SKU ID'] = worksheet[cell].v;
//           console.log(product['SKU ID']);
//         }

//         if(cellAsString[0] === 'C'){
//           // const Special_Category = worksheet[cell].v;
//           product['Special Category'] = worksheet[cell].v;
//           console.log(product['Special Category']);
//         }

//         if(cellAsString[0] === 'D'){
//         //  const Category = worksheet[cell].v;
//           product['Category'] = worksheet[cell].v;
//           console.log(product['Category']);
//         // const categories= db.get().collection('category').insertOne({category:product['Category']})
        

//         }
//         if(cellAsString[0] === 'E'){
//         //  const Brand = worksheet[cell].v;
//           product['Brand'] = worksheet[cell].v;
//           console.log(product['Brand']);
//         }

//         if(cellAsString[0] === 'F'){
//         //  const Item = worksheet[cell].v;
//           product['Item'] = worksheet[cell].v;
//           console.log(product['Item']);
//         }

//         if(cellAsString[0] === 'G'){
//         //  const DESCRIPTION = worksheet[cell].v;
//           product['DESCRIPTION'] = worksheet[cell].v;
//           console.log(product['DESCRIPTION']);
//         }

//         if(cellAsString[0] === 'H'){
//         //  const Pack_size = worksheet[cell].v;
//           product['Pack size'] = worksheet[cell].v;
//           console.log(product['Pack size']);
//         }

//         if(cellAsString[0] === 'I'){
//         //  const Pur_Price = worksheet[cell].v || "";
//           product['Pur_Price'] = worksheet[cell].v ;
//           console.log(product['Pur_Price']);
        
//         }

//         if(cellAsString[0] === 'J'){
//         //  const MRP_PRICE = worksheet[cell].v || "";
//           product['MRP_PRICE'] = worksheet[cell].v ;
//           console.log(product['MRP_PRICE']);
          

//         }
       
//         products.push(product);
//          console.log(product);
//       }
//  }


// //  console.log(products);
// }

// addProducuts();









// const addProducuts = async(req,res) =>{

//     const {file} = req.files
//     console.log(file);
//     file.mv(`./public/excels/${file['name']}`,(err,data)=>{
//         if(err) throw err;
         
//     });

//     xlsxtojson(
//             {
//               input: `./public/excels/sample.3.xlsx`,
//               output: "output.json",
//             },
//           async  function (err, results) {
//               if (err) throw err;
//               products.push(results);
//            })
//            console.log(products);
// }

