const express=require("express")

const app=express()

const port=process.env.PORT||5001

console.log("server starting")

app.get("/",(req,res)=>{
res.status(200).send("server running")
})

app.get("/health",(req,res)=>{
res.status(200).json({
status:"ok",
message:"server is healthy",
timestamp:new Date().toISOString(),
uptime:process.uptime()
})
})

app.listen(port,()=>{
console.log("server running on port "+port)
})

module.exports=app