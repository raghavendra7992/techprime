const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true}
        ,
},
{
    versionKey: false,
  })
//   userSchema.pre("save",async function(next){

//     if(!this.isModified("password")){
//         next();
//     }
//         const salt=await bcrypt.genSaltSync(10);
//         this.password = await bcrypt.hash(this.password,salt);
//         next();
//     });
// userSchema.methods.isPasswordMatched=async function(enteredPassword){
//     return await bcrypt.compare(enteredPassword,this.password);
// };

const User=mongoose.model("user",userSchema)
module.exports={User};