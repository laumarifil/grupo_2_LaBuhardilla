function authMiddleware(req, res , next){ 

    if(req.session.logueado){        
        next();
    } else {
        res.redirect('/users/login')
    } 
};


module.exports = authMiddleware;