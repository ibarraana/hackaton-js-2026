import { Router } from "express"

import { 
    obtenerCliente, 
    obtenerClientePorId, 
    crearCliente, 
    actualizarCliente, 
    eliminarCliente 
} from "../controllers/clienteController.js" 

export const ClienteRouteo = Router()

ClienteRouteo.get('/', obtenerCliente)
ClienteRouteo.get('/:id', obtenerClientePorId)
ClienteRouteo.post('/', crearCliente)
ClienteRouteo.put('/:id', actualizarCliente)
ClienteRouteo.delete('/:id', eliminarCliente)