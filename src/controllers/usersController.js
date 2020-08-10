const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

let usuarios;

let ultimoID = function(array) {
	let contador = array[0].id;
	for(let i = 0; i < array.length; i++) {
		if(array[i].id > contador) {
			contador = array[i].id;
		}
	}
	return contador
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
    newUser: function(req,res){

        usuarios = fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf8');
        usuarios = JSON.parse(usuarios);

        let nuevoUsuario = {
            id: ultimoID(usuarios) + 1,
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            image: 'default.png',
        }

        usuarios.push(nuevoUsuario);
        usuarios = JSON.stringify(usuarios);

        fs.writeFileSync(path.join(__dirname, '../data/users.json'), usuarios);

        return res.redirect('/users/userOK');
    },
    userOK: function(req,res){
        res.render('users/userOK');
    }
}

module.exports = usersController;