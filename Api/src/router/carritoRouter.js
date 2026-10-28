import { Router } from "express"

import { 
    obtenerCarritos, 
    obtenerCarritoPorId, 
    crearCarrito, 
    actualizarCarrito, 
    eliminarCarrito 
} from "../controllers/carritoController.js" 

export const CarritoRouteo = Router()

CarritoRouteo.get('/', obtenerCarritos)
CarritoRouteo.get('/:id', obtenerCarritoPorId)
CarritoRouteo.post('/', crearCarrito)
CarritoRouteo.put('/:id', actualizarCarrito)
CarritoRouteo.delete('/:id', eliminarCarrito)