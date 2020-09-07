const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
let { check, validationResult, body } = require('express-validator'); 

let usuarios;
let imagenUsuario;

const db = require('../database/models');
const operator = db.Sequelize.Op;

let ultimoID = function(array) {
    let contador = array[0].id;
    for(let i = 0; i < array.length; i++) {
        if(array[i].id > contador) {
            contador = array[i].id;
        }
    }
    return contador;
}

const usersController =
{
    listar: function(req, res, next){

       db.User.findAll()
       .then(function(response){
         return res.render('users/users', {usuario: response});
        })
    },
    carrito: function(req,res){
        res.render('users/carrito');
    },
    detailUser: function(req, res){
        db.User.findByPk(req.params.idUsuario, {include: [{association: 'rolDelUsuario'}]})
        .then(function(response){
            res.render('users/detailUser', {usuario: response})
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
        
        usuarios = fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf8');
        usuarios = JSON.parse(usuarios);
        
        if(errors.isEmpty()){         
            
            for(let i = 0 ; i<usuarios.length; i++){
                if(usuarios[i].email == req.body.email && bcrypt.compareSync(req.body.loginPassword, usuarios[i].password)) {                   
                    req.session.logueado = usuarios[i].email ;
                    
                    if(req.body.remember){
                        res.cookie('userCookie', usuarios[i].email , { maxAge: 1000 * 60 * 24 })
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
                    id_role: 2,
                    //phone: ,
                    //address: ,
                    id_city: 20
                })
                .then(function(result){
                    res.redirect('/users/userOK')
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
            res.render('users/profile');
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
        modifyUser: function(req, res, next){
    
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
                return res.render('users/userEditOK')
            })
            .catch(function(error){
                res.send(error)
            })
        },
        editUserOK: function(req,res){
            res.render('users/userEditOK');
        },

    }
    
    module.exports = usersController;