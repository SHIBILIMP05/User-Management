import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    is_admin:{
        type:Boolean,
        require:true
    },
    is_verified:{
        type:Boolean,
        require:true
    },
    token:{
        type:String,
        require:true
    }
})


export default mongoose.model("User",userSchema)