import { Router } from "express"

import { 
    obtenerUsuario, 
    obtenerUsuarioPorId, 
    crearUsuario, 
    actualizarUsuario, 
    eliminarUsuario 
} from "../controllers/usuarioController.js" 

export const UsuarioRouteo = Router()

UsuarioRouteo.get('/', obtenerUsuario)
UsuarioRouteo.get('/:id', obtenerUsuarioPorId)
UsuarioRouteo.post('/', crearUsuario)
UsuarioRouteo.put('/:id', actualizarUsuario)
UsuarioRouteo.delete('/:id', eliminarUsuario)