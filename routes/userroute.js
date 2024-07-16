const express=require("express")
const router=express.Router()
let User= require("../model/user")


router.post("/new", async(req,res)=>{
    const {name, age, favoriteFoods}= req.body
    console.log(req.body)
    let newUser= new  User ({name,age,favoriteFoods})
console.log(newUser,"hrlooooooooooooo")
    let user= await newUser.save()
    res.send({msg: "new user added",user})
})

router.get("/getall",async(req,res)=>{
    const user=await User.find()
    res.send({msg:"this is all the contacts",contacts})
})

router.get("/getone/:name",async(req,res)=>{
    const {name}= req.params
    const user=await User.findOne({name })
    res.send({msg:"user was found", user})
})

router.put("/getbyid/:_id",async(req,res)=>{
    const {_id}= req.params
    const {food}=req.body
    let user=await User.findById({_id })
    
    await user.favoriteFoods.push(food)
    console.log(user, "hello")
    await user.save()


    res.send({msg:"user was found", user})

})


//update w findoneandupdate

router.put("/foau/:_id", async (req,res)=>{
    const {_id}=req.params
    const user= await User.findOneAndUpdate({_id},{$set:req.body},{new:true})
    res.send({msg:"user was found and updated", user})
})

router.put("/foad/:_id", async (req,res)=>{
    const {_id}=req.params
    const user= await User.findOneAndDelete({_id})
    res.send({msg:"user was found and deleted", user})
})

router.delete("/deleteMany/:name", async (req,res)=>{
    const {name}=req.params
await User.deleteMany({name})
    res.send({msg:"user was deleted"})

});
module.exports= router