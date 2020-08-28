const fs = require('fs');
const path = require('path');

const db = require('../database/models');
const { sequelize } = require('../database/models');
const operator = db.Sequelize.Op;

let productos;
let imagenProducto;

let ultimoID = function(array) {
    let contador;
    if(array.length == 0){
        contador = 0
    }else{
        contador = array[0].id;
        for(let i = 0; i < array.length; i++) {
            if(array[i].id > contador) {
                contador = array[i].id;
            }
        }
    }
	return contador
}

const productsController =
{
    products: function(req,res, next){

        db.Product.findAll()
         .then(function(response){
             return res.render('products/products', {producto: response });
             
         })
    },
    detailProduct: function(req,res, next){
        db.Product.findByPk(req.params.idProducto, {include: [{association: 'colorDelProducto'}]})
        .then(function(response){
             return res.render('products/detailProduct', {producto: response });    
         })
        .catch(function(error){
            res.send(error)
        }) 
        },
    searchProduct: function(req, res){
        db.Product.findAll(
            { where: { name: operator.substring = req.params.key } }
        )
        .then(function(response){
            return res.render('products/searchProduct', {producto: response});
        }
        )
    },

    newProduct: function(req,res){
        res.render('products/newProduct')
    },
    createProduct: function(req,res, next){

        if (req.files.length == 0){
            imagenProducto = 'default.jpg'
        } else {
            imagenProducto = req.files[0].filename
        }

        db.Product.create({
            name: req.body.name,
            price: req.body.price,
            id_category: 1,
            id_color: 1,
            image: imagenProducto,
            description: req.body.description,
            stock: req.body.stock
        })
        .then(function(response){
            res.redirect('/products/productOK')
        })
        .catch(function(error){
            res.send(error)
        })
    },
    newProductOK: function(req,res){
        res.render('products/productOK');
    },
    editProduct: function(req,res){

        db.Product.findByPk(req.params.idProducto)
        .then(function(response){
            return res.render('products/editProduct', {
                producto: response
            })
        })
    },
    modifyProduct: function(req, res, next){

        db.Product.update(
            {
                name: req.body.name,
                price: req.body.price,
                id_category: 1,
                id_color: {include:[{association:'colorDelProducto'}]},
                image: 'una imagen',
                description: req.body.description,
                stock: req.body.stock
            },
            {
                where:{
                    id: req.params.idProducto
                }
            })
        .then(function(response){
            return res.render('products/productEditOK')
        })
        .catch(function(error){
            res.send(error)
        })
    },
    editProductOK: function(req,res){
        res.render('products/productEditOK');
    },
    confirmDeleteProduct: function(req,res){

        db.Product.findByPk(req.params.idProducto)
        .then(function(response){
            return res.render('products/deleteProduct', {
                producto: response
            })
        })
    },
    deleteProduct: function(req,res){

        db.Product.destroy({
            where:{
                ID: req.params.idProducto
            }
        })
        .then(function(response){
            return res.redirect('/products/productDeleteOK')
        })
        .catch(function(error){
            res.send(error)
        })
    },
    deleteProductOK: function(req,res){
        res.render('products/productDeleteOK')
    },
    newCategory: function(req, res){
        res.render('products/newCategories')
    },
    newColor: function(req, res){
        res.render('products/newColors')
    },
    colors: function(req, res){
        res.render('products/colors')
    },
    categories: function(req, res){
        res.render('products/categories')
    }
}

module.exports = productsController;