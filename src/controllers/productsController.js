const fs = require('fs');
const path = require('path');

let productos;




const productsController =
{
    products: function(req,res){
        productos = fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf8');
        productos = JSON.parse(productos);

        res.render('products', {producto: productos });
    },
    detailProduct: function(req,res){

        productos = fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf8');
        productos = JSON.parse(productos);

        console.log('ENTRE A DETALLE PRODUCTOOOOOOOOOOOOOO');
        console.log('ID PRODUCTO ' + req.params.idProducto);
        console.log(productos);
        console.log(productos[req.params.idProducto])
        res.render('detailProduct', {producto: productos[req.params.idProducto]})
    },
    newProduct: function(req,res){
        res.render('newProduct')
    },
    createProduct: function(req,res, next){

        productos = fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf8');
        productos = JSON.parse(productos);

        let ultimoID = productos.length

        let nuevoProducto = {
            id: ultimoID + 1,
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
            color: req.body.color,
            image: req.files[0].filename,
            description: req.body.description,
            stock: req.body.stock
        }

        productos.push(nuevoProducto);
        productos = JSON.stringify(productos);

        fs.writeFileSync(path.join(__dirname, '../data/products.json'), productos);

        return res.redirect('productOK');
    },
    newProductOK: function(req,res){
        res.render('productOK');
    },
    editProduct: function(req,res){

        /*for(let i = 0; i < productos.length; i++) {
			if(productos[i].id == req.params.idProducto) {
				return res.render('editProduct', {
					producto: productos[i]
				});
			}
        }*/
        productos = fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf8');
        productos = JSON.parse(productos);

        console.log('ENTRE A EDITAR PRODUCTO');
        console.log(req.params.idProducto);
        console.log(productos[req.params.idProducto]);

        res.render('editProduct', {producto: productos[req.params.idProducto]});
		//res.send('Ese ID no capo');
    },
    modifyProduct: function(req,res){

        productos = fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf8');
        productos = JSON.parse(productos);

        console.log('Estoy en el PUT');
        console.log(productos[req.params.idProducto]);
        console.log(req.params.idProducto);
        console.log(req.body);
        //productos[req.params.idProducto - 1].id = Number.parseInt(req.body.idProducto);
        productos[req.params.idProducto].name = req.body.name;
        productos[req.params.idProducto].price = req.body.price;
        productos[req.params.idProducto].category = req.body.category;
        productos[req.params.idProducto].color = req.body.color;
        productos[req.params.idProducto].image = 'imagenPrueba';
        productos[req.params.idProducto].description = req.body.description;
        productos[req.params.idProducto].stock = req.body.stock;

        //productos[req.params.idProducto - 1] = req.body;
        console.log(productos[req.params.idProducto]);

        productos = JSON.stringify(productos);

        fs.writeFileSync(path.join(__dirname, '../data/products.json'), productos);

        res.redirect('/products/productEditOK');
    },
    editProductOK: function(req,res){
        res.render('productEditOK');
    },
    confirmDeleteProduct: function(req,res){

        productos = fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf8');
        productos = JSON.parse(productos);

        res.render('deleteProduct', {producto: productos[req.params.idProducto]});
    },
    deleteProduct: function(req,res){

        productos = fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf8');
        productos = JSON.parse(productos);

        console.log('Estoy en el DELETE');
        console.log(productos[req.params.idProducto]);
        console.log(req.params.idProducto);
        console.log(req.body);

        productos.splice(req.params.idProducto,1);

        productos = JSON.stringify(productos);
        fs.writeFileSync(path.join(__dirname, '../data/products.json'), productos);

        res.redirect('/products/productDeleteOK');
    },
    deleteProductOK: function(req,res){
        res.render('productDeleteOK');
    }
}

module.exports = productsController;