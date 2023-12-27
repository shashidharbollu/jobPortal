import Recruiter from "../models/recruiter.model"

export default class HomepageController {
    homepage(req, res, next){
        res.render("homepage", {recruiter: req.cookies?.user});

    }
    recruiterPost(req, res, next){
        const{name, email, password} = req.body;
        Recruiter.addRecruiter(name, email, password);
        res.redirect("login");
    }
    loginGet(req, res, next){
        res.render("login", {recruiter: req.cookies?.user });

    }
    loginPost(req, res, next){
        res.redirect("/")
    }

    logout(req, res, next){
        res.clearCookie("user");
        res.redirect("/login");
    }


}