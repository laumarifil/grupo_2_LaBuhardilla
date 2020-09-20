
// Middleware para mostrar cosas de admin, solo al logueado administrador.


function esAdmin(req, res, next){
        
    if(req.session.logueado && req.session.logueado.role == 1) {
        res.locals.esAdmin = 1;
        
    }else{
        res.locals.esAdmin = 2;
    }   
    next();    
}

module.exports = esAdmin;


