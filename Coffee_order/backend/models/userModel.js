import mongoose from "mongoose"

const UserSchema= new mongoose.Schema({
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true, unique:true},

},{minimize:false})
const userModel = mongoose.models.users||mongoose.model("User", UserSchema);
export default userModel;