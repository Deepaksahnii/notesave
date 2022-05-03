const express = require('express');
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');


const JWT_SECRET= 'Deepak is a good $$$boy';

//Create a user using POST: "/api/auth/createuser". No login required  
router.post('/createuser', [
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid Email').isEmail(),
  body('password', 'Password should not be less than 5 characters').isLength({ min: 5 })
], async (req, res) => {

  try {

    // If there are errors return bad request and the errors.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Check weather the user with this same email exists already
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ error: "Sorry a user with this email already exists." });
    }
    const salt = await bcrypt.genSalt(10);
   const secPass=  await bcrypt.hash(req.body.password, salt);
    //Create a new user
    user = await User.create({
      name: req.body.name, 
      email: req.body.email,
      password: secPass
    })
 const data= {
 user:{
   id: user.id
 }
 }
    const authToken= jwt.sign(data, JWT_SECRET)

    res.json({authToken});
    // res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
  }
})

module.exports = router;