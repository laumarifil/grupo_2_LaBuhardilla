const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
let { check, validationResult, body } = require('express-validator'); 

let usuarios;
let imagenUsuario;

const db = require('../database/models');
const operator = db.Sequelize;

const usersController =
{
    listar: function(req, res, next){

       db.User.findAll()
       .then(function(response){
         return res.render('users/users', {usuario: response});
        })
    },
   
    detailUser: function(req, res){
        db.User.findByPk(req.params.idUsuario, {include: [{association: 'rolDelUsuario'}]})
        .then(function(response){
            res.render('users/profile', {usuario: response})
        })
        .catch(function(error){
            res.send(error)
        }) 
    },
    registration: function(req,res){
        res.render('users/registration');
    },
    login: function(req, res){
        
        res.render('users/login');
        
    },
    processLogin: function(req, res){
        
        let errors = validationResult(req);
        
        db.User.findAll()
            .then(function(usuarios){

                if(errors.isEmpty()){
            
                    for(let i = 0 ; i<usuarios.length; i++){

                        if(usuarios[i].email == req.body.email && bcrypt.compareSync(req.body.loginPassword, usuarios[i].password)) {                   
                            req.session.logueado = {
                                email: usuarios[i].email,
                                role: usuarios[i].id_role,
                                name: usuarios[i].name,
                                id : usuarios[i].id 
                            }
                            
                            
                            if(req.body.remember){
                                res.cookie('userCookie', usuarios[i].email , { maxAge: 1000 * 60 * 24 })                                ;
                            }
                            
                            return res.redirect('/');
                        }
                    }
                    return res.render('users/login', {
                        errors:{
                            email: {
                                msg : 'credenciales inválidas'
                            }
                        }
                    }
                )}
            })      
        },
    newUser: function(req,res, next){
            
            let errors = validationResult(req);
            
            if(errors.isEmpty()) {

                if (req.files.length == 0){
                    imagenUsuario = 'default.png'
                } else {
                    imagenUsuario = req.files[0].filename
                }

                db.User.create({
                    name: req.body.name,
                    surname: req.body.surname,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 10),
                    image: imagenUsuario,
                    id_role: 2
                    //phone: ,
                    //address: ,
                    //id_city: 1
                })
                .then(function(result){
                    res.redirect('/users/login')
                })
                .catch(function(error){
                    res.send(error)
                })


            } else {
                return res.render('users/registration',{
                    errors : errors.mapped(),
                    old:req.body
                })
            } 
        },
        userOK: function(req,res){
            res.render('users/userOK');
        },
        profile: function(req, res){

            Promise.all([db.User.findByPk(req.session.logueado.id),db.Cart.findAll( {where: { id_user: req.session.logueado.id } })])
            .then(function(response){
                return res.render('users/profile', { usuario: response[0], carrito: response[1] })
            })

        },
        
        logOut: function(req, res){
            req.session.destroy();
            res.cookie('userCookie','', {maxAge: -1})
            res.redirect('/');
        },
        editUser: function(req,res){

            db.User.findByPk(req.params.idUsuario)
            .then(function(result){
                return res.render('users/editUser', {
                    usuario: result
                })
            })
        },
        modifyUser: function(req, res){
    
            db.User.update(
                {
                    name: req.body.name,
                    surname: req.body.surname,
                    email: req.body.email,
                },
                {
                    where:{
                        id: req.params.idUsuario
                    }
                })
            .then(function(response){
                return res.render('users/profile')
            })
            .catch(function(error){
                res.send(error)
            })
        },
        buy: function(req, res) {

            req.session.cart = [];
            res.render('users/compra')
        },
        createBuy: function(req, res){
            let total = 0;
            for(let i = 0; i < req.session.cart.length; i++){
                total = total + (req.session.cart[i].cantidad * req.session.cart[i].price);
            }
            db.Cart.create({
                purchase_date: '10/10/2020',
                id_user: req.session.logueado.id,
                id_payment: req.body.id_payment,
                total: total,
            })
            .then(function(response){
                return res.redirect('/users/compra')
            })
            .catch(function(error){
                res.send(error)
            })
        },
        changePassword: function(req,res){
            db.User.findByPk(req.params.idUsuario)
            .then(function(response){
                res.render('users/changePassword', { usuario: response });
            })            
        },
        modifyPassword: function(req,res){

            let errors = validationResult(req);

            if(errors.isEmpty()) {

                db.User.findByPk(req.params.idUsuario)
                .then(function(response){

                    if(bcrypt.compareSync(req.body.oldpassword, response.password)) {
                
                        db.User.update(
                            {
                                password: bcrypt.hashSync(req.body.newpassword, 10)
                            },
                            {
                                where:{
                                    id: req.params.idUsuario
                                }
                            })
                        .then(function(response){
                            return res.render('home')
                        })
                        .catch(function(error){
                            res.send(error)
                        })
                    }
                })

            } 
        }
    }
    
    module.exports = usersController;