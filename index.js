const server = require("./server")
const port = 5000


server.listen(port, () => {
    console.log(`Sever running at http://localhost:${port}`)
}) 