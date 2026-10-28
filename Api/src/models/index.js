import Carrito from './carrito.model.js'
import CarritoDetalle from './carritodetalle.model.js' 
import Cliente from './cliente.model.js'
import DetallePedido from './detallepedido.model.js'
import EstadoPedido from './estadopedido.model.js'
import Pedido from './pedido.model.js'
import Producto from './producto.model.js'
import Usuario from './usuario.model.js'

Carrito.belongsTo(Usuario, { foreignKey: "idUsuario" })
Usuario.hasMany(Carrito, { foreignKey: "idUsuario" })

Carrito.belongsTo(Cliente, { foreignKey: "idCliente" })
Cliente.hasMany(Carrito, { foreignKey: "idCliente" })

CarritoDetalle.belongsTo(Carrito, { foreignKey: "idCarrito" })
Carrito.hasMany(CarritoDetalle, { foreignKey: "idCarrito" })

CarritoDetalle.belongsTo(Producto, { foreignKey: "idProducto" })
Producto.hasMany(CarritoDetalle, { foreignKey: "idProducto" })

DetallePedido.belongsTo(Pedido, { foreignKey: "idPedido" })
Pedido.hasMany(DetallePedido, { foreignKey: "idPedido" })

DetallePedido.belongsTo(Producto, { foreignKey: "idProducto" })
Producto.hasMany(DetallePedido, { foreignKey: "idProducto" })

Pedido.belongsTo(Carrito, { foreignKey: "idCarrito" })
Carrito.hasMany(Pedido, { foreignKey: "idCarrito" })

Pedido.belongsTo(Usuario, { foreignKey: "idUsuario" })
Usuario.hasMany(Pedido, { foreignKey: "idUsuario" })

Pedido.belongsTo(Cliente, { foreignKey: "idCliente" })
Cliente.hasMany(Pedido, { foreignKey: "idCliente" })

Pedido.belongsTo(EstadoPedido, { foreignKey: "idEstado" })
EstadoPedido.hasMany(Pedido, { foreignKey: "idEstado" })

export {
    Carrito,
    CarritoDetalle,
    Cliente,
    DetallePedido,
    EstadoPedido,
    Pedido,
    Producto,
    Usuario
}
    
