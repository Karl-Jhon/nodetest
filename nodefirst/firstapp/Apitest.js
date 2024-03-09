const express = require("express");
const app = express();
const port = 3000;

app.use(express.json())

app.get("/" , (req , resp)=>{
    console.log("Get Request Successfull ! ");
    resp.send("Get Req Successfully initiated");
})

app.listen(port , ()=>{
    console.log(`Server established at ${port}`)
})