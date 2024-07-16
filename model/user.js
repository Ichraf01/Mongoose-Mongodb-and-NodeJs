const mongoose=require("mongoose")
const schema=mongoose.Schema

const userSchema= new schema({
    name:{
        type:String
    },

    age:{ 
        type:Number
    },

    favoriteFoods:
        [String]
})


const User = mongoose.model('User', userSchema);

module.exports = User;

