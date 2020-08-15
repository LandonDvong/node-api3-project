const express = require('express');
const logger = require("./middleware/logger")
const userRouter = require("./users/userRouter")

const server = express();

server.use(express.json())

// Custom middleware
server.use(logger())

server.use(userRouter)

server.use((error, req, res, next) => {
    console.log(error)

    res.status(500).json({
        message: "Something went wrong, try again later."
    })
})





module.exports = server;
