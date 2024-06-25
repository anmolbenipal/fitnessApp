const dotenv = require("dotenv");
const mongoose=require('mongoose');
const express = require('express');
const app = express();


dotenv.config({path:'./config.env'});

require('./db/conn');
//const User = require('./model/userSchema');

app.use(express.json());
app.use(require('./router/auth'));
const PORT = process.env.PORT || 5000;

//app.get('/about',(req,res)=>{
   // res.send(`Hello About World from the server`);
 //});
// app.get('/contact',(req,res)=>{
    
  //  res.send(`Hello Contact World from the server`);
 //});
 app.get('/signin',(req,res)=>{
    res.send(`Hello Login World from the server`);
 });
 app.get('/signup',(req,res)=>{
    res.send(`Hello Register World from the server`);
 });

if (process.env.NODE_ENV === "production"){
app.use(express.static("client"));
const path = require("path);
app.get("*",(req,res)=>{
res.sendFile(path.resolve(__dirname,'client','build','index.html'));
})
                     }



app.listen(PORT,()=>{
    console.log(`server is running at port no ${PORT}`);
})
