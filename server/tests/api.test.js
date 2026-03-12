const request=require("supertest")
const express=require("express")

const app=express()

app.get("/test",(req,res)=>{
res.json({message:"api working"})
})

describe("api test",()=>{

test("should return message",async()=>{

const res=await request(app).get("/test")

expect(res.statusCode).toBe(200)
expect(res.body.message).toBe("api working")

})

})