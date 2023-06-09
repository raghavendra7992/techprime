const { Project } = require("../model/projectmodel");
const asynchandler=require('express-async-handler')


const createproject=asynchandler(async(req,res)=>{

    const {theme,reason,type,division,category,priority,department,start_date,end_date,location}=req.body; 

   try{
        const project=new Project({theme,reason,type,division,category,priority,department,start_date,end_date,location,status:"Registered"});
        await project.save();
        res.send({msg:"project registered successfully"});
    }
    catch(err){
        console.log(err);
    }
})

const getproject=asynchandler(async(req,res)=>{
   let page=req.query.page
   let limit=req.query.limit
  let s=(Number(page))*10;
    try {
        const projects = await Project.find().limit(limit).skip(s-10)
        if (!projects) {
          res.send({ msg: 'project not found' });
        } else {
          res.send(projects);
        }
      } catch (err) {
        res.send({msg:"Error in finding projects"});
      }
})
const updateproject=asynchandler(async(req,res)=>{
    const id=req.params.id;
  try {
    const project = await Project.findById(id)
    if (!project) {
      res.send({ msg: 'project not found' });
    } else {
        const {status}=req.body
       project.status= status
      await project.save();
      res.send({ msg: 'project updated successfully', project: project });
    }
  } catch (err) {
    res.send({msg:"Error in updating projects data,try again"});
  }
})
const projectcount=asynchandler(async(req,res)=>{
  try{
    const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth() + 1;
      const day = today.getDate();
      const todayDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
    let count=await Project.find().count()
    let closecount=await Project.find({status:"Closed"}).count()
    let running=await Project.find({status:"Running"}).count()
    let cancelled=await Project.find({status:"Cancelled"}).count()
    let clouser=await Project.find({end_date:{$lt:todayDate}}).count()


    
    let strategy = await Project.find({department:"Statergy"}).count()
    let strategyclose = await Project.find({$and:[{department:"Statergy"},{status:"Closed"}]}).count()
    let finance = await Project.find({department:"Finance"}).count()
    let financeclosed = await Project.find({$and:[{department:"Finance"},{status:"Closed"}]}).count()
    let qaulity = await Project.find({department:"Qaulity"}).count()
    let qaulityclose = await Project.find({$and:[{department:"Qaulity"},{status:"Closed"}]}).count()
    let maintanance = await Project.find({department:"Maintenance"}).count()
    let maintananceclose = await Project.find({$and:[{department:"Maintenance"},{status:"Closed"}]}).count()
    let store = await Project.find({department:"Stores"}).count()
    let storeclose = await Project.find({$and:[{department:"Stores"},{status:"Closed"}]}).count()
    let hr = await Project.find({department:"HR"}).count()
    let hrclose = await Project.find({$and:[{department:"HR"},{status:"Closed"}]}).count()
    res.send({count:count,closecount:closecount,running:running,cancelled:cancelled,
      clouser:clouser,strategy:strategy,strategyclose:strategyclose,finance:finance,financeclosed:financeclosed,
      qaulity:qaulity,qaulityclose:qaulityclose,maintanance:maintanance,maintananceclose:maintananceclose,store:store,
      storeclose:storeclose,hr:hr,hrclose:hrclose
    })
  }catch(err){
    res.send({msg:"Data Is not found! or sumething missing please try again"})
  }
})

module.exports={createproject,getproject,projectcount,updateproject};