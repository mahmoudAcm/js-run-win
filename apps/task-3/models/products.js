const mongoose  = require('mongoose') 

const  productsShecma = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    desription:{
        type:String
    }
},{
    timestamps:true
})

productsShecma.statics.updateProduct = async (id, body) => {
    const product = await products.findById({_id:id})
    if(!product) throw "can't find the product"

    keys = Object.keys(body)
    keys.forEach((key) => {
        product[key] = body[key]
    })

    await product.save() 
    return product
}

productsShecma.statics.deleteProduct = async (id) => {
    const product = await products.findById({_id:id})
    if(!product) throw "can't find the product"
    await products.deleteOne({_id:id})
    return product
}

const products = mongoose.model('products', productsShecma)

module.exports = products