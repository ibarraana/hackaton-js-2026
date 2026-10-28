import { Cliente } from "../models/index.js"

export default {
    up: async() => {
        console.log("Insertamos clientes...")

        await Cliente.findOrCreate({ where: { razonSocial: 'Ana Ibarra SRL'},
            defaults: {
                nombre: 'Ana Gabriela Ibarra',
                fechaIngreso: new Date()
            }
        })

        await Cliente.findOrCreate({ where: { razonSocial: 'Poncio SRL'},
            defaults: {
                nombre: 'Juan Poncio',
                fechaIngreso: new Date()
            }
        })
    },
    down: async() => {
        console.log("Eliminando todos los clientes...")
        await Cliente.destroy({ where: {}, truncate: true, cascade: true})
    }
}