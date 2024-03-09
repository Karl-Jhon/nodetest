const express = require("express");
const app = express();
const port = 3000;

app.use(express.json())

app.get("/DELETE" , (req , resp)=>{
    console.log("DELETE Request Successfull ! ");
    resp.send("data DELETE Req Successfully initiated");
})

app.listen(port , ()=>{
    console.log(`Server established at ${port}`)
})