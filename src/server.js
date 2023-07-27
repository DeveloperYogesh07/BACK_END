const express = require('express');
const app = express();
const router = require('./route/userRoute');
const bodyParser = require("body-parser");

// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/',router);

app.listen(3000,()=>{
    console.log("app is listening to port 3000..");
})