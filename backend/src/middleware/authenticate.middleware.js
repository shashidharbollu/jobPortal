const authenticate = (req, res, next) => {
    if(req.cookies.user){
        next();
    }else {
        res.render("messege", {
            recruiter : null,
            message : 
            "Only recruiter is allowed to access this page, login as recruiter to make or edit changes and then validate"
        });
    }
};

export default authenticate;