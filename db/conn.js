const mongoose = require('mongoose');
const DB = process.env.DATABASE;

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    serverSelectionTimeoutMS: 3000
    
}).then(()=>{
    console.log(`connection successful`);
}).catch((err)=>console.log(`no connection`));