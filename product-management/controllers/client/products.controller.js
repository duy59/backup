const Product = require('../../models/product.model')

module.exports.products = async (req, res) => {
    const allProducts = await Product.find({
        status : "active",
        deleted : false
    })
    
    console.log(allProducts)
    const newProduct = allProducts.map(item => {
        item.priceNew = (item.price * (100 - item.discount) / 100).toFixed(0)
        return item
    })

    res.render("clients/pages/products/index" , {
        pageTitle : "Danh sách sp",
        allProducts: allProducts
    })
    }
