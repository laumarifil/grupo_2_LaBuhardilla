const fs = require('fs');
const path = require('path');
const {check, validationResult, body} = require('express-validator');
let usuarios = fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf8');
usuarios = JSON.parse(usuarios);

module.exports = [
    check('name')
        .isLength({min:1})
        .withMessage('Campo obligatorio'),

    check('surname')
        .isLength({min:1})
        .withMessage('Campo obligatorio'),

    check('email')
        .isEmail().
        withMessage('email inválido'),

    check('password')
        .isLength({min:8})
        .withMessage('Mínimo 8 caracteres'),

    //falta la logica para comparar contraseñas.
    check('repassword')
        .isLength({min:1})
        .withMessage('Contraseñas no coinciden'),

    body('email')
        .custom(function(value){
        
        for(let i=0; i<usuarios.length ; i++){
            if(usuarios[i].email == value) {
                return false;
            }
        }
        return true;
        })
        .withMessage('Usuario ya existente')
];

