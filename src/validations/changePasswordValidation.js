const fs = require('fs');
const {check, validationResult, body} = require('express-validator');

module.exports = [
    check('oldpassword')
        .isLength({min:8})
        .withMessage('Mínimo 8 caracteres'),

    check('newpassword')
        .isLength({min:8})
        .withMessage('Mínimo 8 caracteres'),

    //falta la logica para comparar contraseñas.
    check('repassword')
        .isLength({min:1})
        .withMessage('Contraseñas no coinciden'),

];

