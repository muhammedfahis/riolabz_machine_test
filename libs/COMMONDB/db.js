const db = require('../../config/connection');
const COLLECTION = require('../../config/collections')


const addSingleProductDB =async(product) =>{

    try {
        console.log('added to add product');
        await db.get().collection(COLLECTION['PRODUCTS']).insertOne(product)
        return{
            message:'SUCCESS ADDING SINGLE PRODUCT'
        }
    } catch (error) {
        return {message:'ERROR IN ADDING SINGLE PRODUCT'}
    }
 
}

const addMultipleProductsDB =async(products) =>{

    try {
        await db.get().collection(COLLECTION['PRODUCTS']).insertMany(products)
        return{
            message:'SUCCESS ADDING MULTIPLE PRODUCTS'
        }
    } catch (error) {
        return{
            message:'ERROR IN ADDING MULTIPLE PRODUCTS'
        }
    }
}

const AddSingleCategoryDB =async(category) =>{
    try {
        
      const data =  await db.get().collection(COLLECTION['CATEGORY']).insertOne({category:category})
        return{
            data:data,
            message:'SUCCESS ADDING SINGLE CATEGORY'
        }
    } catch (error) {
        return{
            message:'ERROR IN ADDING SINGLE CATEGORY'
        }
    }
}

const addMultipleCategoryDB = async(categories) =>{
    try {
        await db.get().collection(COLLECTION['CATEGORY']).insertOne(categories)
        return{
            message:'SUCCESS ADDING MULTIPLE CATEGORIES'
        }
    } catch (error) {
        return{
            message:'ERROR IN ADDING MULTIPLE CATEGORIES'
        }
        
    }
}

const updateProductDB = async(item,pur_price,sell_price) =>{
    try {
        await db.get().collection(COLLECTION['PRODUCTS']).updateMany({"item":item},{$set:{pur_price:pur_price,mrp_price:sell_price}})
        return{
            message:'PRODUCT UPDATION SUCCESS'
        }
    } catch (error) {
        return{
            message:'ERROR IN PRODUCT UPDATION'
        }
    }
}

const addMultipleBrandsDB = async(brands) =>{
    try {
        await db.get().collection(COLLECTION['BRAND']).insertMany(brands)
        return{
            message:'SUCCESS ADDING MULTIPLE BRANDS'
        }
    } catch (error) {
        return{
            message:'ERROR IN ADDING MULTIPLE BRANDS'
        }
        
    }
}

const getAllCategoriesDB = async() =>{

    try {
        return await db.get().collection(COLLECTION['CATEGORY']).find().toArray()
    } catch (error) {
        return {
            message:'ERROR IN GETTING CATEGORIES'
        }
    }
}

const getManyCategoriesDB = async(category) =>{

    try {
        return await db.get().collection(COLLECTION['CATEGORY']).findOne({category:category})
    } catch (error) {
        return {
            message:'ERROR IN GETTING CATEGORIES'
        }
    }
}

const getAllBrandsDB =async () =>{

    try {
        return await db.get().collection(COLLECTION['BRAND']).find().toArray()
    } catch (error) {
        return{
            message:'ERROR IN GETTING BRANDS'
        }
    }
}

const getManyBrandsDB =async (brand) =>{

    try {
        return await db.get().collection(COLLECTION['BRAND']).findOne({brandName:brand})
    } catch (error) {
        return{
            message:'ERROR IN GETTING BRANDS'
        }
    }
}

const getSingleCategoryDB =async(categoryName) =>{

    try {
        return await db.get().collection(COLLECTION['CATEGORY']).findOne({category:categoryName}).toArray()
    } catch (error) {
        return{
            message:'ERROR IN FETHING SINGLE CATEGORY'
        }
    }
}

const getSingleBrandDB = async(brandName) =>{

    try {
        return await db.get().collection(COLLECTION['BRAND']).findOne({brand:brandName}).toArray()
    } catch (error) {
        return{
            message:'ERROR IN FETCHNG SINGLE BRAND'
        }
    }
}

const addSingleBrandDB = async(brandName) =>{
    try {
    
        return await db.get().collection(COLLECTION['BRAND']).insertOne({brandName:brandName});
    } catch (error) {
        
    }
}

const getAllProductsDB =async(item) =>{
    try {
        console.log('tried to get Product');
        return await db.get().collection(COLLECTION['PRODUCTS']).findOne({"item":item})
    } catch (error) {
       return{
           message:'ERROR IN FETCHING PRODUCTS'
       } 
    }
}

module.exports ={
    addMultipleCategoryDB,
    addMultipleProductsDB,
    getSingleBrandDB,
    getSingleCategoryDB,
    getAllBrandsDB,
    getAllCategoriesDB,
    addSingleProductDB,
    AddSingleCategoryDB,
    addSingleBrandDB,
    getManyBrandsDB,
    getManyCategoriesDB,
    addMultipleBrandsDB,
    updateProductDB,
    getAllProductsDB
}