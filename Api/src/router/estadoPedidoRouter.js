import { Router } from "express"

import { 
    obtenerEstadoPedido, 
    obtenerEstadoPedidoPorId, 
    crearEstadoPedido, 
    actualizarEstadoPedido, 
    eliminarEstadoPedido 
} from "../controllers/estadoPedidoController.js" 

export const EstadoPedidoRouteo = Router()

EstadoPedidoRouteo.get('/', obtenerEstadoPedido)
EstadoPedidoRouteo.get('/:id', obtenerEstadoPedidoPorId)
EstadoPedidoRouteo.post('/', crearEstadoPedido)
EstadoPedidoRouteo.put('/:id', actualizarEstadoPedido)
EstadoPedidoRouteo.delete('/:id', eliminarEstadoPedido)