import { CarritoDetalle } from '../models/index.js'

export default {
  up: async () => {
    console.log('Insertando detalles de carrito...')

    await CarritoDetalle.findOrCreate({
      where: { 
        idCarrito: 1, 
        idProducto: 1 
      },
      defaults: {
        cantidad: 2,
        subTotal: 1500.50
      }
    });

    await CarritoDetalle.findOrCreate({
      where: { 
        idCarrito: 1, 
        idProducto: 2 
      },
      defaults: {
        cantidad: 1,
        subTotal: 850.00
      }
    })
  },

  down: async () => {
    console.log('Eliminando todos los detalles de carrito...')
    await CarritoDetalle.destroy({ where: {}, truncate: true, cascade: true })
  }
}
