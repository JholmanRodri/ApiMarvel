const favoritoPost=async(req,res)=>{
    const{usuario,idpelicula}=req.body
    const favorito= new Favorito ({usuario,idpelicula})
    await favorito.save()
    res.json({
        "msg":"registro exitoso"
    })
}

const favoritoDelete=async(req,res)=>{
    const {id}=req.params
    const favorito= await Favorito.findByIdAndDelete(id)
    res.json({"eliminado":favorito})
}

//listar los datos del favorito con nombre y titulo e imagen de la peli
const favoritoGet=async(req,res)=>{
    const favoritos=await Favorito.find()
    .populate("usuario","nombre")
    .populate("idpelicula",["titulo","imagen"])
    res.json({
        favoritos
    })
}

const favListarU=async(req, res)=>{
    const {id}=req.params;
    const favorito=await Favorito.find({usuario:id})
    .populate({
        path:"idpelicula",
        populate:{
            path:"reparto.idActor"
        }
    })
    // .populate("idpelicula.reparto.idactor",["nombre","foto","observaciones"])
    res.json({favorito})
}

// listar por id
const favoritoGetBuscarid=async(req,res)=>{
    const {id}=req.params
    const favorito=await Favorito.findById(id)
    res.json({
        favorito
    })
}

//todos los favoritos de un usuario
const favoritoGetComentarioUsuario=async(req, res)=>{
    const {id}=req.params;
    const favorito = await Favorito.find().where('usuario').in(id).exec();
    res.json({
        favorito
    })
}

const favoritoPeliTitulo=async(req,res)=>{
    const {titulo}=req.query
    const favorito = await Favorito.find(
        //{nombre:new RegExp(query,"i")}
        { 
            $or: [
                { titulo: new RegExp(titulo, "i") },
            ]
        }
    ) 
    res.json({favorito})
} 

export {favoritoGet,favListarU,favoritoPeliTitulo,favoritoDelete,favoritoPost,favoritoGetBuscarid,favoritoGetComentarioUsuario}