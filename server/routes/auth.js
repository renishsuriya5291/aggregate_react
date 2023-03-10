const express = require("express");
const router = express.Router();
const Worker = require('../models/Worker')
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const JWT_SECRET = "renidh";
var fetchuser = require("../middleware/fetchuser");


router.post("/register",

body('email').isEmail(),
body('password').isLength({ min: 5 }),

async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {name, email, password, phone, occupation } = req.body;

    if(occupation === 'worker'){
        const worker = await Worker.findOne({email});
        if(worker){
            res.status(400).send({success: false,msg: "Email Already taken!"});
        }else{
            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(password, salt);

            const newWorker = await Worker.create({
                name,email,password: secPass,phone
            })

            const data = {
                user: {
                  id: newWorker.id,
                },
              };

              const authToken = jwt.sign(data, JWT_SECRET);
              // console.log(authToken);
              res.json({  success: true,authToken });
        }
    }else{
        res.status(200).send({success: false,msg: "Occupation must worker because other's are comming soon.."});
    }
});


router.post('/login',
body("email", "Enter a valid Email").isEmail(),
body("password", "Password cannot be blank").exists(), 
async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      success = false;
      return res.status(400).json({ success,errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let worker = await Worker.findOne({ email });
      if (!worker) {
        success = false;
        return res.status(400).json({ success,msg: "Invalid credentials" });
      }

      const passwordCompare = await bcrypt.compare(password, worker.password);
      if (!passwordCompare) {
        success = false;
        return res.status(400).json({ success,msg: "Invalid credentials" });
      }

      const data = {
        user: {
          id: worker.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      // console.log(authToken);
      success = true;
      res.json({ success, authToken });
    } catch (err) {
      console.error(err.message);
      res.status(500).send( {success: false,msg: "Internal server error"});
    }

}) 


router.get('/getuser', fetchuser, async (req,res) => {
    try {
        userId = req.user.id;
        const user = await Worker.findById(userId).select("-password");
        res.send(user);
      } catch (err) {
        console.error(err.message);
        res.status(500).send( {success: false,msg: "Internal server error"});
      }
})


router.put('/updateuser', fetchuser, async (req,res) => {
  const {name, address, gender, age, work_hour, occupation} = req.body;
  try{
    const updatedUser = {}
    if(name){updatedUser.name = name}
    if(address){updatedUser.address = address}
    if(gender){updatedUser.gender = gender}
    if(age){updatedUser.age = age}
    if(work_hour){updatedUser.work_hour = work_hour}
    if(occupation){updatedUser.occupation = occupation}

      const worker = await Worker.findByIdAndUpdate(req.user.id, {$set: updatedUser}, {new: true});
      res.status(200).send({success: true,worker})
  }
  catch (err) {
    console.error(err.message);
    res.status(500).send( {success: false,msg: "Internal server error"});
  }
})

module.exports = router;
