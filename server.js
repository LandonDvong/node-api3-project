const express = require('express');
const logger = require("./middleware/logger")
const userRouter = require("./users/userRouter")

const server = express();

server.use(express.json())



// Custom middleware
server.use(logger())

server.use(userRouter)
server.get('/', (req, res) => {
    res.send(`
    <div>
        <h1>Welcome to Quake Live!</h1>
      
    </div>
    `)
})

server.use((error, req, res, next) => {
    console.log(error)

    res.status(500).json({
        message: "Something went wrong, try again later."
    })
})





module.exports = server;
