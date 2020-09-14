const path = require('path');

const db = require('../database/models');

const { sequelize } = require('../database/models');
const { response } = require('express');
const { promiseImpl } = require('ejs');
const { promises } = require('fs');

const operator = db.Sequelize.Op;

const productsController =
{
    products: function(req,res){

        db.Product.findAll()
         .then(function(response){
             return res.render('products/products', {producto: response });           
         })
    },
    detailProduct: function(req,res){
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
            { 
                where: { 
                    name: {
                        [operator.substring]: req.body.key
                    }
                }
            }
        )
        .then(function(response){
            return res.render('products/searchProduct', {producto: response});
        }
        )
    },
    newProduct: function(req,res){
        Promise.all([db.Category.findAll(),db.Color.findAll()])
        .then(function(response){
            console.log(response)
            res.render('products/newProduct' , { categoria : response[0], color: response[1] })
        })
    },
    createProduct: function(req,res){
        let imagenProducto;
        if (req.files.length == 0){
            imagenProducto = 'default.jpg'
        } else {
            imagenProducto = req.files[0].filename
        }
        db.Product.create({
            name: req.body.name,
            price: req.body.price,
            id_category: req.body.category,
            id_color: req.body.color,
            image: imagenProducto,
            description: req.body.description,
            stock: req.body.stock
        })
        .then(function(response){
            res.redirect('products/products')
        })
        .catch(function(error){
            res.send(error)
        })
    },

    editProduct: function(req,res){
        Promise.all([db.Product.findByPk(req.params.idProducto),db.Category.findAll(),db.Color.findAll()])
        .then(function(response){
            return res.render('products/editProduct', { producto: response[0], categoria: response[1], color: response[2] })
        })
    },
    modifyProduct: function(req, res){
        let imagenProducto;
        db.Product.findByPk(req.params.idProducto)
        .then(function(response){

            if (req.files.length > 0){
                imagenProducto = req.files[0].filename
            } else {
                imagenProducto = response.image
            }
        }).then(function(){
            db.Product.update(
                {
                    name: req.body.name,
                    price: req.body.price,
                    id_category: req.body.category,
                    id_color: req.body.color,
                    image: imagenProducto,
                    description: req.body.description,
                    stock: req.body.stock
                },
                {
                    where:{
                        id: req.params.idProducto
                    }
                })
            .then(function(response){
                return res.render('products/products')
            })
            .catch(function(error){
                res.send(error)
            })
        })
    },
   
    confirmDeleteProduct: function(req,res){
        db.Product.findByPk(req.params.idProducto)
        .then(function(response){
            return res.render('products/products', {
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
            return res.redirect('/products/products')
        })
        .catch(function(error){
            res.send(error)
        })
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
            res.redirect('/products/categories')
        })
    },
 
    editCategory: function(req,res){

        db.Category.findByPk(req.params.idCategoria)
        .then(function(response){
            return res.render('products/editCategory', {categoria: response})
        })
    },
    modifyCategory: function(req, res){
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
            return res.redirect('/products/categories')
        })
        .catch(function(error){
            res.send(error)
        })
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
            return res.redirect('/products/categories')
        })
        .catch(function(error){
            res.send(error)
        })
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
            res.redirect('/products/colors')
        })
    },

    editColor: function(req,res){
        db.Color.findByPk(req.params.idColor)
        .then(function(response){
            return res.render('products/editColor', {color: response})
        })
    },
    modifyColor: function(req, res){
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
            return res.redirect('/products/colors')
        })
        .catch(function(error){
            res.send(error)
        })
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
            return res.redirect('/products/colors')
        })
        .catch(function(error){
            res.send(error)
        })
    },
   
}

module.exports = productsController;