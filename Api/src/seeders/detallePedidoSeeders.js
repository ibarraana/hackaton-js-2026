import { DetallePedido } from '../models/index.js'

export default {
  up: async () => {
    console.log('Insertando detalles de pedidos...');

    await DetallePedido.findOrCreate({
      where: { 
        idPedido: 1, 
        idProducto: 1 
      },
      defaults: {
        cantidad: 2,
        subTotal: 1500.5
      }
    })

    await DetallePedido.findOrCreate({
      where: { 
        idPedido: 1, 
        idProducto: 2 
      },
      defaults: {
        cantidad: 1,
        subTotal: 850.0
      }
    })
  },

  down: async () => {
    console.log('Eliminando todos los detalles de pedidos...')
    await DetallePedido.destroy({ where: {}, truncate: true, cascade: true })
  }
}
