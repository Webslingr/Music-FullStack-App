const jwt = require("jsonwebtoken");

const validateToken = (req, res, next) => {

        let token = req.get("x-auth-token");
        
        if(!token) {
            return res.status(401).json("Access Denied");
        }        

        //Check for existence of token in req header (x-auth token)
        jwt.verify(token, process.env.SECRET_KEY)

        //Request to proceed on
        next();

        // const tokVerify = jwt.verify({token}, process.env.SECRET_KEY);

        // next();

    //If doesn't exist, sen response 401 unauthorized

    //If does exist, make sure it is valid... if not send 401, otherwise allow

    //Request to proceed on

}

module.exports = validateToken