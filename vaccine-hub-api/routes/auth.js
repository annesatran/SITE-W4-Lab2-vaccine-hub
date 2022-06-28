const express = require("express")
const router = express.Router()

router.post("/login", async (req, res, next) => {
    try {
        // take user email and password + try to authenticate
    } catch(err) {
        next(err)
    }
})

router.post("/register", async (req, res, next) => {
    try {
        // take email, password, + create a new user in the database
    } catch(err) {
        next(err)
    }
})



module.exports = router