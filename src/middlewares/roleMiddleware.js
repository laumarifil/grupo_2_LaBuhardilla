// Middleware de ruta para redirigir a la home en caso de no ser un Admin logueado.  


function roleMiddleware(req, res, next){
        
    if(req.session.logueado && req.session.logueado.role == 1) {
        
        next();
        
    }else{

        res.redirect('/')
     
    }
}

module.exports = roleMiddleware;