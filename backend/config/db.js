const mongoose=require("mongoose");

const connection=()=>{
    try{
        const con=mongoose.connect("mongodb+srv://raghavendra:8308417992@cluster0.4c7a7uc.mongodb.net/primelab?retryWrites=true&w=majority")
        console.log("sucessfully connected")
    }catch(e){
        console.log(e)
    }
}

module.exports={connection};