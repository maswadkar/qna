const express = require("express")

const app = express()

// set the view engine to ejs
app.set('view engine', 'ejs');


app.get('/',(req,res)=>res.render('index'))
app.listen('8800',()=>{console.log("hello World")})

