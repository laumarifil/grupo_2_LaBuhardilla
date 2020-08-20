const fs = require('fs');
const path = require('path');

let productos;
let imagenProducto;

let ultimoID = function(array) {
	let contador = array[0].id;
	for(let i = 0; i < array.length; i++) {
		if(array[i].id > contador) {
			contador = array[i].id;
		}
	}
	return contador
}

const productsController =
{
    products: function(req,res){
        productos = fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf8');
        productos = JSON.parse(productos);

        console.log(productos);
        res.render('products/products', {producto: productos });
    },
    detailProduct: function(req,res){

        productos = fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf8');
        productos = JSON.parse(productos);

        console.log('ENTRE A DETALLE PRODUCTOOOOOOOOOOOOOO');
        console.log('ID PRODUCTO ' + req.params.idProducto);
        console.log(productos);
        console.log(productos[req.params.idProducto])

        for(let i = 0; i < productos.length; i++) {
			if(productos[i].id == req.params.idProducto) {
				return res.render('products/detailProduct', {producto: productos[i], productos: productos});
            }
        }
        res.send('No encontramos un producto con esas características');
        
        //res.render('products/detailProduct', {producto: productos[req.params.idProducto]})
    },
    newProduct: function(req,res){
        res.render('products/newProduct')
    },
    createProduct: function(req,res, next){

        productos = fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf8');
        productos = JSON.parse(productos);

        if (req.files.length == 0){
            imagenProducto = 'default.jpg'
        } else {
            imagenProducto = req.files[0].filename
        }

        let nuevoProducto = {
            id: ultimoID(productos) + 1,
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
            color: req.body.color,
            image: imagenProducto,
            description: req.body.description,
            stock: req.body.stock
        }

        productos.push(nuevoProducto);
        productos = JSON.stringify(productos);

        fs.writeFileSync(path.join(__dirname, '../data/products.json'), productos);

        res.redirect('/products/productOK');
    },
    newProductOK: function(req,res){
        res.render('products/productOK');
    },
    editProduct: function(req,res){

        productos = fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf8');
        productos = JSON.parse(productos);

        console.log('ENTRE A EDITAR PRODUCTO');
        console.log(req.params.idProducto);
        console.log(productos[req.params.idProducto]);

        for(let i = 0; i < productos.length; i++) {
			if(productos[i].id == req.params.idProducto) {
				return res.render('products/editProduct', {producto: productos[i]});
			}
		}
		res.send('No encontramos un producto con esas características');

        //res.render('products/editProduct', {producto: productos[req.params.idProducto]});
    },
    modifyProduct: function(req,res, next){

        productos = fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf8');
        productos = JSON.parse(productos);

        console.log('Estoy en el PUT');
        console.log(productos[req.params.idProducto]);
        console.log(req.params.idProducto);
        console.log(req.body);
        //productos[req.params.idProducto - 1].id = Number.parseInt(req.body.idProducto);

		for(let i = 0; i < productos.length; i++) {
			if(productos[i].id == req.params.idProducto) {
                
                productos[i].name = req.body.name;
                productos[i].price = req.body.price;
                productos[i].category = req.body.category;
                productos[i].color = req.body.color;
                productos[i].description = req.body.description;
                productos[i].stock = req.body.stock;
                if (req.files.length > 0){
                    productos[i].image = req.files[0].filename
                }
        
                //productos[req.params.idProducto - 1] = req.body;
                //console.log(productos[req.params.idProducto]);
        
                productos = JSON.stringify(productos);
                fs.writeFileSync(path.join(__dirname, '../data/products.json'), productos);
        
                return res.redirect('/products/productEditOK');
			}
		}
		res.send('No encontramos un producto con esas características');

    },
    editProductOK: function(req,res){
        res.render('products/productEditOK');
    },
    confirmDeleteProduct: function(req,res){

        productos = fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf8');
        productos = JSON.parse(productos);

        for(let i = 0; i < productos.length; i++) {
			if(productos[i].id == req.params.idProducto) {
                res.render('products/deleteProduct', {producto: productos[i]});
			}
		}
		res.send('No encontramos un producto con esas características');
    },
    deleteProduct: function(req,res){

        productos = fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf8');
        productos = JSON.parse(productos);

        console.log('Estoy en el DELETE');
        console.log(productos[req.params.idProducto]);
        console.log(req.params.idProducto);
        console.log(req.body);

        for(let i = 0; i < productos.length; i++) {
			if(productos[i].id == req.params.idProducto) {
                productos.splice(i,1);

                productos = JSON.stringify(productos);
                fs.writeFileSync(path.join(__dirname, '../data/products.json'), productos);
        
                return res.redirect('/products/productDeleteOK');
			}
		}
		res.send('No encontramos un producto con esas características');
    },
    deleteProductOK: function(req,res){
        res.render('products/productDeleteOK');
    }
}

module.exports = productsController;