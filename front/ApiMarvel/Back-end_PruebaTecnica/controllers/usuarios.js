import Usuario from "../models/usuarios.js"
import bcryptjs from "bcryptjs"
import { generarJWT } from "../middlewares/validar_jwt.js"

const usuarioPost = async (req, res) => {
    const { nombre, email, password, documento } = req.body
    const salt = bcryptjs.genSaltSync(10)
    const usuario = new Usuario({ nombre, email, password,documento })
    usuario.email = email.toUpperCase()
    usuario.password = bcryptjs.hashSync(password, salt)
    await usuario.save()
    res.json({
        msg: "Registro Exitoso",
        usuario
    })
}

const usuarioPutdatos = async (req, res) => {
    const { id } = req.params
    const { nombre, email, password, documento } = req.body
    let salt = bcryptjs.genSaltSync(10)
    const usuario = await Usuario.findByIdAndUpdate(id, { nombre, apellidos, email, password, documento })
    usuario.password = bcryptjs.hashSync(password, salt)
    await usuario.save()

    res.json({
        usuario
    })
}

const usuarioLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const usuario = await Usuario.findOne({ email })
        if (!usuario) {
            return res.status(400).json({
                msg: "Usuario / Password no son correctos"
            })
        }
        if (usuario.estado === 0) {
            return res.status(400).json({
                msg: "Usuario Inactivo"
            })
        }
        const validPassword = bcryptjs.compareSync(password, usuario.password);
        if (!validPassword) {
            return res.status(400).json({
                msg: "Usuario / Password no son correctos"
            })
        }
        const token = await generarJWT(usuario.id);
        res.json({
            usuario,
            token
        })
    } catch (error) {
        return res.status(500).json({
            msg: "Hable con el WebMaster"
        })
    }
}
const usuarioGetListarid = async (req, res) => {
    const { id } = req.params
    const usuario = await Usuario.findOne({ id })
    res.json({
        usuario
    })
}


const usuarioGetListarNombre = async (req, res) => {
    const { nombre } = req.query;
    const nombres = await Usuario.find(
        {
            $or: [
                { nombre: new RegExp(nombre, "i") },
            ]
        }
    )
    res.json({ nombres })
}

const usuarioPutActivar = async (req, res) => {
    const { id } = req.params
    const activar = await Usuario.findByIdAndUpdate(id, { estado: 1 })
    res.json({
        "msg": "Usuario activado con exito",
        activar
    })
}

const usuarioPutDesactivar = async (req, res) => {
    const { id } = req.params
    const desactivar = await Usuario.findByIdAndUpdate(id, { estado: 0 })
    res.json({
        "msg": "Usuario desactivado con exito",
        desactivar
    })
}

export { usuarioPost, usuarioPutdatos, usuarioPutActivar, usuarioPutDesactivar, usuarioLogin, usuarioGetListarid, usuarioGetListarNombre }