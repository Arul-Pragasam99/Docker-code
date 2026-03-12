const http=require("http")

const port=5000

const server=http.createServer((req,res)=>{
res.writeHead(200,{"Content-Type":"text/plain"})
res.end("server running inside docker")
})

server.listen(port,()=>{
console.log("server running on port "+port)
})