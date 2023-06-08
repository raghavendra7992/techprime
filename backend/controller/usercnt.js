const {User}=require("../model/usermodel");
const bcrypt = require('bcrypt');
const AsyncHandler = require("express-async-handler");

// const signup=AsyncHandler(async(req,res)=>{

//     const {email,password}=req.body; 
//     console.log(email,password)   
//    try{
//         let exist=await User.findOne({email:email});
//         if(exist){
//             res.send({msg:"user already registered please signin"});
//         }
//         else{
//             bcrypt.hash(password, 10, async function(err, hash)
//             {
//                 if(err){
//                     res.send(err);
//                 }
//                 else{
//                     const user=new User({email,password:hash});
//                     await user.save();
//                     res.send({msg:"user registered successfully"});
//                 }
//             });


//         }
//     }
//     catch(err){
//         console.log(err);
    // }
// })
const signup = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    let exist = await User.findOne({ email: email }).maxTimeMS(20000); // Increase timeout to 20 seconds

    if (exist) {
      res.send({ msg: "User already registered. Please sign in." });
    } else {
      bcrypt.hash(password, 10, async function (err, hash) {
        if (err) {
          res.send(err);
        } else {
          const user = new User({ email, password: hash });
          await user.save();
          res.send({ msg: "User registered successfully." });
        }
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error.");
  }
});



const login=AsyncHandler(async(req,res)=>{

    const {email,password}=req.body;

    try{
        const user=await User.find({email:email});
        if(user.length>0){

            bcrypt.compare(password, user[0].password, function(err, result) {
                if(result){
                    
                    res.send({msg:"Valid User"})
                }
                else{
                    res.send({msg:"Invalid User"});
                }
            });

        }
        else{
            res.send({msg:"Invalid User"});
        }
       }catch(err){
        res.send({msg:"something went wrong try again"});
    }
})



module.exports={signup,login};