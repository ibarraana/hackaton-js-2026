import { Router } from "express"

import { 
    obtenerCarritosDetalle, 
    obtenerCarritosDetallePorId, 
    crearCarritosDetalle, 
    actualizarCarritosDetalle, 
    eliminarCarritoCarritosDetalle 
} from "../controllers/carritoDetalleController.js" 

export const CarritoDetalleRouteo = Router()

CarritoDetalleRouteo.get('/', obtenerCarritosDetalle)
CarritoDetalleRouteo.get('/:id', obtenerCarritosDetallePorId)
CarritoDetalleRouteo.post('/', crearCarritosDetalle)
CarritoDetalleRouteo.put('/:id', actualizarCarritosDetalle)
CarritoDetalleRouteo.delete('/:id', eliminarCarritoCarritosDetalle)