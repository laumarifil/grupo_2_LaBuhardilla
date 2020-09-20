function session(req, res, next){
        
    if(req.session.logueado) {
        
        res.locals.session = {
            name : req.session.logueado.name,
            id : req.session.logueado.id     
        };
    
    }
    next() 
}
module.exports = session;