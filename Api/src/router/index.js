import { Router } from "express"

import { CarritoRouteo } from "./carritoRouter.js"
import { CarritoDetalleRouteo } from "./carritoDetalleRouter.js"
import { ClienteRouteo } from "./clienteRouter.js"
import { DetallePedidoRouteo } from "./detallePedidoRouter.js"
import { EstadoPedidoRouteo } from "./estadoPedidoRouter.js"
import { PedidoRouteo } from "./pedidoRouter.js"
import { ProductoRouteo } from "./productoRouter.js"
import { UsuarioRouteo } from "./usuarioRouter.js"

const ruteo = Router()

ruteo.use('/carritos', CarritoRouteo)
ruteo.use('/carritos-detalles', CarritoDetalleRouteo)
ruteo.use('/clientes', ClienteRouteo)
ruteo.use('/pedidos-detalles', DetallePedidoRouteo)
ruteo.use('/estados-pedidos', EstadoPedidoRouteo)
ruteo.use('/pedidos', PedidoRouteo)
ruteo.use('/productos', ProductoRouteo)
ruteo.use('/usuarios', UsuarioRouteo)

export default ruteo