const express = require("express")
const User = require("../models/user")
const router = express.Router()

router.post("/login", async (req, res, next) => {
    try {
        // take user email and password + try to authenticate
        const user = await User.login(req.body)
        return res.status(200).json( { user } )
    } catch(err) {
        console.log(err)
        next(err)
    }
})

router.post("/register", async (req, res, next) => {
    try {
        // take email, password, + create a new user in the database
        const user = await User.register(req.body)
        return res.status(201).json( {user} )
    } catch(err) {
        next(err)
    }
})

module.exports = router