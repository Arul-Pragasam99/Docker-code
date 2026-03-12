const express=require("express")
const mongoose=require("mongoose")

const app=express()

app.get("/",(req,res)=>{
res.json({message:"api running"})
})

if(process.env.NODE_ENV!=="test"){
app.listen(5000,()=>{
console.log("server running")
})
}

module.exports=app