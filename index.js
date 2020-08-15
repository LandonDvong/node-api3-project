const server = require("./server")
const port = 5000


server.get('/', (req, res) => {
    res.send(`
    <div>
        <h1>Welcome to the Node Api 4 Heroku Test Launch</h1>
      
    </div>
    `)
})

server.listen(port, () => {
    console.log(`Sever running at http://localhost:${port}`)
}) 