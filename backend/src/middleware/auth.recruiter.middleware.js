import {body, validationResult} from "express-validator"

const validateSignUp = async(req, res, next) => {
    const rules = [
        body("name").notEmpty().withMessage("name cannot be empty"),
        body("email").notEmpty().withMessage("email cannot be empty"),
        body("password").notEmpty().withMessage("password cannot be empty")

    ];

    await Promise.all(rules.map((rule)=> rule.run(req)));
    const result = validationResult(req);

    if(!result.isEmpty()){
        return res.send(result.errors.map((err) => err.msg ));
    }else {
        next()
    }
    
};

export default validateSignUp;