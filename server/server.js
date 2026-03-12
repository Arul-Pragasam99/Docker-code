const express=require("express")
const mongoose=require("mongoose")

const app=express()
const port=5000

const db=process.env.MONGO_URI||"mongodb://mongo:27017/taskdb"

mongoose.connect(db)
.then(()=>console.log("database connected"))
.catch(err=>console.log(err))

app.get("/",(req,res)=>{
res.send("node backend running in docker")
})

app.listen(port,()=>{
console.log("server running on port "+port)
})