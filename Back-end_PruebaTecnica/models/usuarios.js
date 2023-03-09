import mongoose from "mongoose";
const UsuarioSchema= new mongoose.Schema({
    nombre:{type:String,maxlength:50,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true,minlength:8},
    documento:{type:String,required:true,maxlength:11},
    estado:{type:Number,default:1},
    createdAt:{type:Date,default:Date.now()}
}) 
  
export default mongoose.model("Usuario",UsuarioSchema) 















































































