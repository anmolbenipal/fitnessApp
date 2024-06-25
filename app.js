// const dotenv = require("dotenv");
// const mongoose=require('mongoose');
// const express = require('express');
// const app = express();


// dotenv.config({path:'./config.env'});

// require('./db/conn');
// //const User = require('./model/userSchema');

// app.use(express.json());
// app.use(require('./router/auth'));
// const PORT = process.env.PORT || 5000;

// //app.get('/about',(req,res)=>{
//    // res.send(`Hello About World from the server`);
//  //});
// // app.get('/contact',(req,res)=>{
    
//   //  res.send(`Hello Contact World from the server`);
//  //});
//  app.get('/signin',(req,res)=>{
//     res.send(`Hello Login World from the server`);
//  });
//  app.get('/signup',(req,res)=>{
//     res.send(`Hello Register World from the server`);
//  });

// app.listen(PORT,()=>{
//     console.log(`server is running at port no ${PORT}`);
// })
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors'); // Add cors package
const app = express();

dotenv.config({ path: './config.env' });
require('./db/conn');
// const User = require('./model/userSchema');

app.use(express.json());
app.use(cors()); // Use cors middleware without any specific options to allow all origins

// Include your routes
app.use(require('./router/auth'));

const PORT = process.env.PORT || 5000;

app.get('/signin', (req, res) => {
  res.send(`Hello Login World from the server`);
});

app.get('/signup', (req, res) => {
  res.send(`Hello Register World from the server`);
});

app.listen(PORT, () => {
  console.log(`server is running at port no ${PORT}`);
});
