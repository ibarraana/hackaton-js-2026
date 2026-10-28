import { Router } from "express"

import { 
    obtenerUsuario, 
    crearUsuario, 
    solicitarRecuperacion, 
    restablecerContrasenia 
} from "../controllers/usuarioController.js" 

export const UsuarioRouteo = Router()

UsuarioRouteo.get('/', obtenerUsuario)
UsuarioRouteo.post('/', crearUsuario)
UsuarioRouteo.post('/recuperar', solicitarRecuperacion)
UsuarioRouteo.put('/recuperar', restablecerContrasenia)