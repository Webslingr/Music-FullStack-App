var express = require("express");
var router = express.Router();
const Login = require("../../models/login");
const bcrypt = require("bcrypt");
var validateToken = require("../../middleware/validateToken")
// const saltRounds = 10;

// Json web token
const jwt = require("jsonwebtoken");

//import the User model
const User = require("../../models/user");
const config = require("dotenv").config();

const { token } = require("morgan");

/* GET users listing. */
router.get("/foo", function (req, res, next) {
  res.send("respond with foo");
});

//GET ALL USERS
router.get('/', (req, res) => {

  User.find((err, users) => {

      //Handle if err occured
      if(err) {
          console.log(err)
          return res.status(500).send('An error occured')
      }

      console.log(users)
      return res.json(users)
  })
})

// Register user
router.post("/register", async(req, res) => {

    // Hashing the passwords
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);


    // Gets register body from request
   const registeredUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword
     
   })


  // Saves user with hashed password 
  try {

    // Creating and assigning token to user

    const token = jwt.sign({_id: registeredUser._id}, process.env.SECRET_KEY)

    //Add Token to header
    res
      .header('Access-Control-Expose-Headers', 'x-auth-token')
      .header('x-auth-token', token)
      .json({ message: 'You have been registered ' + registeredUser.firstName + '!'})
    
    
    // saving the newly created user
    const savedUser = registeredUser.save();
    // res.json({success: true, message: 'Create user successful'});
    //  res.send({ savedUser: registeredUser._id });
  } catch (err) {
    console.log(err);
    return res.status(400).send('User could not be created');
  }

});



// Login User
router.post('/login', async (req, res) => {

//   console.log(req.body)
//   Login.validate(req.body, (error) => {

//     if(error){
//      return res.status(422).send(error)
//     }

//   // Check the existance of user/email in db
//   const userEmail =  User.findOne({email: req.body.email})

//   // Checks if email is unique and does not exist
//   if(!userEmail) {
//     return res.status(400).send(`Email doesn't exist!`)
//   }
//   // Check if password is ok
//   const validPassword =  bcrypt.compare(req.body.password, userEmail.password)
//   if(!validPassword) {
//     return res.status(400).send(`Invalid password!`)
//   }
//   //  else {
//   //     res.status(201).send(`Password valid!`)
//   // }

//   // Creating and assigning token to user

//   const token = jwt.sign({_id: userEmail._id}, process.env.SECRET_KEY)

//   //Add Token to header
//   res
//     .header('Access-Control-Expose-Headers', 'x-auth-token')
//     .header('x-auth-token', token)
//     .json({ message: 'You are logged in ' + userEmail.firstName + '!'})
// })


//   })


  // Check the existance of user/email in db
  const userEmail = await User.findOne({email: req.body.email})

  // Checks if email is unique and does not exist
  if(!userEmail) {
    return res.status(400).send(`Email doesn't exist!`)
  }
  // Check if password is ok
  const validPassword = await bcrypt.compare(req.body.password, userEmail.password)
  if(!validPassword) {
    return res.status(400).send(`Invalid password!`)
  }
  //  else {
  //     res.status(201).send(`Password valid!`)
  // }

  // Creating and assigning token to user

  const token = jwt.sign({email: userEmail.email}, process.env.SECRET_KEY)

  //Add Token to header
  res
    .header('Access-Control-Expose-Headers', 'x-auth-token')
    .header('x-auth-token', token)
    .json({ message: 'You are logged in ' + userEmail.firstName + '!'})

});

module.exports = router;
