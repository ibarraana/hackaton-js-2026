import { Carrito } from "../models/index.js"

export default {
    up: async() => {
        console.log("Insertamos carritos...")

        await Carrito.findOrCreate({ 
            where: { idUsuario: 1, idCliente: 1 }, 
            defaults: {
                fechaCreacion: new Date()
            }
        })
    },
    down: async() => {
        console.log("Eliminando todos los carritos...")
        await Carrito.destroy({ where: {}, truncate: true, cascade: true }) 
    }
}
