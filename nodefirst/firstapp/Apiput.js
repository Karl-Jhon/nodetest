const express = require("express");
const app = express();
const port = 3000;

app.use(express.json())

app.get("/put" , (req , resp)=>{
    console.log("Put Request Successfull ! ");
    resp.send("data Update Req Successfully initiated");
})

app.listen(port , ()=>{
    console.log(`Server established at ${port}`)
})