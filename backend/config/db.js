// const mongoose=require("mongoose");

// const connection=()=>{
//     try{
//         const con=mongoose.connect(process.env.mongo_db)
//         console.log("sucessfully connected")
//     }catch(e){
        
//         console.log(e)
//     }
// }

// module.exports={connection};
const mongoose=require("mongoose");
require('dotenv').config()
console.log(process.env.mongo_url)
const connection=mongoose.connect(process.env.mongo_db)

module.exports={connection};