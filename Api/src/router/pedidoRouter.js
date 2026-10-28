import { Router } from "express"

import { 
    obtenerPedido, 
    obtenerPedidoPorId, 
    crearPedido, 
    actualizarPedido, 
    eliminarPedido 
} from "../controllers/pedidoController.js" 

export const PedidoRouteo = Router()

PedidoRouteo.get('/', obtenerPedido)
PedidoRouteo.get('/:id', obtenerPedidoPorId)
PedidoRouteo.post('/', crearPedido)
PedidoRouteo.put('/:id', actualizarPedido)
PedidoRouteo.delete('/:id', eliminarPedido)