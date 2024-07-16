const express=require("express")
const app=express()
const connectDB=require("./config/connectdb")
const port=5000

connectDB()
app.use(express.json())
app.use("/Api", require("./routes/userroute"))
app.listen(port,(err)=>{
    err?console.log(err):console.log(`server is running on port ${port}`)
})