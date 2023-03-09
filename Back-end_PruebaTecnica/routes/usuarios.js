import {Router} from "express"
import {usuarioPost,usuarioPutdatos,usuarioPutActivar,usuarioPutDesactivar,usuarioLogin,usuarioGetListarid,usuarioGetListarNombre} from "../controllers/usuarios.js"
import { check } from "express-validator";
import HerlpersUsuario from "../helpers/usuarios.js";
import { validarCampos } from "../middlewares/validar_campos.js";
import { validarJWT } from "../middlewares/validar_jwt.js";

const router=Router()

router.post("/registro",[
    check('nombre',"El nombre es obligatorio").not().isEmpty(),
    check('nombre',"El nombre debe tener menos de 50 caracteres").isLength({max:50}),
    check('email',"El email es Obligatorio").not().isEmpty(),
    check('email',"No es un email valido").isEmail(),
    // check('email').custom(HerlpersUsuario.existeEmail),
    check('password',"La contraseña es obligatoria").not().isEmpty(),
    check('password',"La contraseña debe tener mas de 8 caracteres").isLength({min:6}),
    validarCampos,
],usuarioPost);

router.put("/datos/:id",[
    validarJWT,
    check('nombre',"El nombre es obligatorio").not().isEmpty(),
    check('nombre',"El nombre debe tener menos de 50 caracteres").isLength({max:50}),
    // check('email',"Es Obligatorio").not().isEmpty(),
    // check('email',"No es un email valido").isEmail(),
    check('password',"La contraseña es obligatoria").not().isEmpty(),
    check('password',"La contraseña debe tener mas de 8 caracteres").isLength({min:6}),
    validarCampos,
],usuarioPutdatos)

router.post("/login",[
    check('email').custom(HerlpersUsuario.noexisteEmail),
    check('email',"No es un email valido").isEmail(),
    validarCampos
],usuarioLogin)

router.get("/listar/:id",[
    validarJWT,
    check('id').isMongoId(),
    check('id').custom(HerlpersUsuario.existeUsuarioById),
    validarCampos
],usuarioGetListarid)

router.get("/nombre",[
    check('nombre',"El nombre es obligatorio").not().isEmpty(),
    validarCampos
],usuarioGetListarNombre)

router.put("/activar/:id",[
    validarJWT,
    check('id').isMongoId(),
    check('id').custom(HerlpersUsuario.existeUsuarioById),
    validarCampos
],usuarioPutActivar)

router.put("/desactivar/:id",[
    validarJWT,
    check('id').isMongoId(),
    check('id').custom(HerlpersUsuario.existeUsuarioById),
    validarCampos
],usuarioPutDesactivar)

export default router;
