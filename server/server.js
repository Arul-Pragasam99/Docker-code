const express=require("express")

const app=express()
const port=5001

console.log("fresh server loaded")

app.get("/",(req,res)=>{
res.send("root working")
})

app.get("/health",(req,res)=>{
res.json({
status:"ok",
message:"server is healthy"
})
})

app.listen(port,()=>{
console.log("server running on port "+port)
})