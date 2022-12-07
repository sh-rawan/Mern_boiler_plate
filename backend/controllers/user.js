const User = require("../database/models/User")
const bcrypt = require("bcrypt")
const path = require("path")
const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")
const Chat = require("../database/models/Chat")

const masterPassword = "123456"
const regexEmail = /^([a-z0-9/.]{3,})@([a-z]{3,11}).(com)$/i
// const regexPassword = /^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&?@ "]).*$/
const regexPassword = /^.{4,}$/


// List all users for admin only
exports.listAll = asyncHandler(async(req,res) => {
    if(req.user.email == "admin@example.com"){
        const users = await User.find({}, {first_name:1, last_name:1, picture:1, email:1})
        res.send(users)
    }else{
        res.status(401).send("Request not authorized!")
    }
})

