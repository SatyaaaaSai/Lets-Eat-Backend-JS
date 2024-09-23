const express=require("express");

const app=express();
const appRouter=require("../backend/routes/index");

app.use("/api/v1",appRouter);







app.get('/hi',(req,res)=>{
    console.log("Received POST request");
    return res.status(200).send("POST request received");
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})