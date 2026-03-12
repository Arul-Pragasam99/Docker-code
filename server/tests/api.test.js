const request=require("supertest")
const app=require("../server")

describe("api tests",()=>{

test("should return 200 status",async()=>{
const res=await request(app).get("/")
expect(res.statusCode).toBe(200)
})

test("should return json",async()=>{
const res=await request(app).get("/")
expect(res.headers["content-type"]).toMatch(/json/)
})

test("should return message",async()=>{
const res=await request(app).get("/")
expect(res.body.message).toBe("api running")
})

test("route should exist",async()=>{
const res=await request(app).get("/")
expect(res.body).toHaveProperty("message")
})

test("response should not be null",async()=>{
const res=await request(app).get("/")
expect(res.body).not.toBeNull()
})

})