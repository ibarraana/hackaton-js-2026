import { Producto } from "../models/index.js"

export default {
    up: async() => {
        console.log("Insertamos productos...")

        await Producto.findOrCreate({ where: { nombre: 'Aspiradora Ibarra'},
            defaults: {
                descripcion: 'Producto de limpieza para el hogar',
                precioUnitario: 166.5
            }
        })

        await Producto.findOrCreate({ where: { nombre: 'set de limpieza'},
            defaults: {
                descripcion: 'Escobillon con trapo de piso',
                precioUnitario: 100.5
            }
        })

        
    },
    down: async() => {
        console.log("Eliminando todos los productos...")
        await Producto.destroy({ where: {}, truncate: true, cascade: true})
    }
}