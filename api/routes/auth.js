const router = require("express").Router();
const User = require('../models/User')
const bcrypt = require('bcrypt')



//Register

router.post("/register", async (req, res) => {
    try {
        
        const {username, email, password} = req.body
        const salt = await bcrypt.genSalt(10)
        const saltPwd = await bcrypt.hash(password,salt)
        const newUser = new User({
            username: username,
            email: email,
            password: saltPwd,
        })
        const user = await newUser.save();
        res.status(200).json(user)

        // or
        // await newUser.save();
        // res.status(200).json("User Created Successfully")
    }
    catch (err) {
        res.status(401).json(err)
    }
})

//Login

router.post('/login', async (req,res)=>{
    try {
       
        const user = await User.findOne({ username: req.body.username})
        !user && res.status(400).json("User not registered")
        
        const validate = await bcrypt.compare(req.body.password, user.password)
        !validate && res.status(400).json("Invalid Password") 

        const {password , ...others} = user._doc 
        res.status(200).json(others)
    }
    catch(err){
        res.status(401).json(err)
    }
})
 

module.exports = router