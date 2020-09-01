const fs = require('fs');
const path = require('path');

const db = require('../database/models');
const { sequelize } = require('../database/models');
const { response } = require('express');
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
        db.Product.findByPk(req.params.idProducto, {include: {all: true} })
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
    categories: function(req, res){

        db.Category.findAll()
        .then(function(result){
            res.render('products/categories', { categorias: result})
        })
    },
    newCategory: function(req, res){
        res.render('products/newCategory')
    },
    createCategory: function(req, res){
        console.log(req.body.name);
        db.Category.create({
            name: req.body.name
        })
        .then(function(result){
            res.redirect('/products/categories/categoryOK')
        })
    },
    categoryOK: function(req,res){
        res.render('products/categoryOK');
    },
    editCategory: function(req,res){

        db.Category.findByPk(req.params.idCategoria)
        .then(function(response){
            return res.render('products/editCategory', {categoria: response})
        })
    },
    modifyCategory: function(req, res, next){

        db.Category.update(
            {
                name: req.body.name,
            },
            {
                where:{
                    id: req.params.idCategoria
                }
            })
        .then(function(response){
            return res.redirect('/products/categories/categoryEditOK')
        })
        .catch(function(error){
            res.send(error)
        })
    },
    editCategoryOK: function(req,res){
        res.render('products/categoryEditOK');
    },
    confirmDeleteCategory: function(req,res){

        db.Category.findByPk(req.params.idCategoria)
        .then(function(response){
            return res.render('products/deleteCategory', {categoria: response})
        })
    },
    deleteCategory: function(req,res){

        db.Category.destroy({
            where:{
                id: req.params.idCategoria
            }
        })
        .then(function(response){
            return res.redirect('/products/categories/categoryDeleteOK')
        })
        .catch(function(error){
            res.send(error)
        })
    },
    deleteCategoryOK: function(req,res){
        res.render('products/categoryDeleteOK')
    },
    colors: function(req, res){

        db.Color.findAll()
       .then(function(result){
           res.render('products/colors', {colores: result})
       })
   },
    newColor: function(req, res){
        res.render('products/newColors')
    },
    createColor: function(req,res){
        db.Color.create({
            name: req.body.name
        })
        .then(function(result){
            res.redirect('/products/colors/colorOK')
        })
    },
    colorOK: function(req, res){
        res.render('products/colorOK')
    },
    editColor: function(req,res){

        db.Color.findByPk(req.params.idColor)
        .then(function(response){
            return res.render('products/editColor', {color: response})
        })
        
    },
    modifyColor: function(req, res, next){

        db.Color.update(
            {
                name: req.body.name,
            },
            {
                where:{
                    id: req.params.idColor
                }
            })
        .then(function(response){
            return res.redirect('/products/colors/colorEditOK')
        })
        .catch(function(error){
            res.send(error)
        })
    },
    editColorOK: function(req,res){
        res.render('products/colorEditOK');
    },
    confirmDeleteColor: function(req,res){

        db.Color.findByPk(req.params.idColor)
        .then(function(response){
            return res.render('products/deleteColor', {color: response})
        })
    },
    deleteColor: function(req,res){

        db.Color.destroy({
            where:{
                id: req.params.idColor
            }
        })
        .then(function(response){
            return res.redirect('/products/colors/colorDeleteOK')
        })
        .catch(function(error){
            res.send(error)
        })
    },
    deleteColorOK: function(req,res){
        res.render('products/colorDeleteOK')
    },

}

module.exports = productsController;