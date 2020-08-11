function setUserBycookie( req, res, next ){
    
    if(req.cookies.userCookie == undefined) {
        req.session.user = req.cookies.userCookie;        
    }
    next();
}

module.exports = setUserBycookie;