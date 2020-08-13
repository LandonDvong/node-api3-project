// code away!
const express = require("express")
const logger = require("./middleware/logger")


const server = express()
const port = 5000

server.use(express.json())

// Custom middleware
server.use(logger())
server.use((err, req, res, next) => {
    console.log(err)

    res.status(500).json({
        message: "Something went wrong, try again later."
    })
})



server.listen(port, () => {
    console.log(`Sever running at http://localhost:${port}`)
})