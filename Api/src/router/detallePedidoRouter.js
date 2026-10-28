import { Router } from "express"

import { 
    obtenerDetallePedido, 
    obtenerDetallePedidoPorId, 
    crearDetallePedido, 
    actualizarDetallePedido, 
    eliminarDetallePedido 
} from "../controllers/detallePedidoController.js" 

export const DetallePedidoRouteo = Router()

DetallePedidoRouteo.get('/', obtenerDetallePedido)
DetallePedidoRouteo.get('/:id', obtenerDetallePedidoPorId)
DetallePedidoRouteo.post('/', crearDetallePedido)
DetallePedidoRouteo.put('/:id', actualizarDetallePedido)
DetallePedidoRouteo.delete('/:id', eliminarDetallePedido)