const express = require("express");
const app = express();
const port = 3000;

app.use(express.json())

app.get("/post" , (req , resp)=>{
    console.log("Post Request Successfull ! ");
    resp.send("data post Req Successfully initiated");
})

app.listen(port , ()=>{
    console.log(`Server established at ${port}`)
})