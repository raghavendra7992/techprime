const express=require("express")
const cors=require("cors")
const  usersRoute  = require("./routes/userroutes")
const { connection } = require("./config/db")
const  projectRoute  = require("./routes/projectroute")
const app=express()
const morgan=require("morgan")
app.use(morgan('dev'))
app.use(express.json())
app.use(cors({origin:"*"}))
app.use("/",usersRoute);
app.use("/",projectRoute);

app.get("/",(req,res)=>{
    try{
        res.send("Tech prime API")
    }catch(err){
        res.send(err)
    }
})


app.listen(8080,async()=>{
    try{
        await connection;
        console.log("conected")
    }catch(err){
        console.log(err)
    }
console.log("port 8080")
})