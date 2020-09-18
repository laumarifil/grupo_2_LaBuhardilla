function esAdmin(req, res, next){
    if (req.session.logueado.id_role == 1){
        res.locals.esAdmin = true
    }else{
        res.locals.esAdmin = false
    }
    next()
    

}

module.exports = esAdmin