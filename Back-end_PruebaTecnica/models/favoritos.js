import mongoose from "mongoose";
const FavoritosSchema =new mongoose.Schema({
    usuario: {type:mongoose.Schema.ObjectId,ref:"Usuario",required:true},
    idComic:{type:Number,required:true}
})
export default mongoose.model("Favorito", FavoritosSchema)