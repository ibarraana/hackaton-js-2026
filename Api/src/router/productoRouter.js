import { Router } from "express"

import { 
    obtenerProducto, 
    obtenerProductoPorId, 
    crearProducto, 
    actualizarProducto, 
    eliminarProducto 
} from "../controllers/productoController.js" 

export const ProductoRouteo = Router()

ProductoRouteo.get('/', obtenerProducto)
ProductoRouteo.get('/:id', obtenerProductoPorId)
ProductoRouteo.post('/', crearProducto)
ProductoRouteo.put('/:id', actualizarProducto)
ProductoRouteo.delete('/:id', eliminarProducto)