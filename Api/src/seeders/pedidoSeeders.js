import { Pedido } from '../models/index.js'

export default {
  up: async () => {
    console.log('Insertando pedidos de prueba...');

    await Pedido.findOrCreate({
      where: { idCarrito: 1 }, 
      defaults: {
        idUsuario: 1,
        idCliente: 1,
        fecha: new Date(),
        total: 230.50,
        idEstado: 1 // Pendiente
      }
    })
  },

  down: async () => {
    console.log('Eliminando todos los pedidos...')
    await Pedido.destroy({ where: {}, truncate: true, cascade: true })
  }
}
