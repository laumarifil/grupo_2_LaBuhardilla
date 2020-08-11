const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
let { check, validationResult, body } = require('express-validator'); 

let usuarios;
let imagenUsuario;

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
    listar: function(req, res){
        usuarios = fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf8');
        usuarios = JSON.parse(usuarios);
        
        res.render('users/users', {usuario: usuarios });
    },
    carrito: function(req,res){
        res.render('users/carrito');
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
                    req.session.logueado = usuarios[i].email;
                    
                    if(req.body.remember){
                        res.cookie('userCookie', usuarios[i].email , {maxAge:1000 * 60 * 2 })
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
            
            usuarios = fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf8');
            usuarios = JSON.parse(usuarios);
            
            if(errors.isEmpty()) {

                if (req.files.length == 0){
                    imagenUsuario = 'default.png'
                } else {
                    imagenUsuario = req.files[0].filename
                }
                               
                let nuevoUsuario = {
                    id: ultimoID(usuarios) + 1,
                    name: req.body.name,
                    surname: req.body.surname,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 10),
                    image: imagenUsuario,
                }
                
                usuarios.push(nuevoUsuario);
                usuarios = JSON.stringify(usuarios);
                
                fs.writeFileSync(path.join(__dirname, '../data/users.json'), usuarios);
                
                return res.redirect('/users/userOK');
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
        }
    }
    
    
    module.exports = usersController;