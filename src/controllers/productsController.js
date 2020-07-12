const productsController =
{
    products: function(req,res){
        res.render('products')
    },
    detailProduct: function(req,res){
         res.render('detailProduct')
    },
    newProduct: function(req,res){
        res.render('newProduct')
    }
}

module.exports = productsController;