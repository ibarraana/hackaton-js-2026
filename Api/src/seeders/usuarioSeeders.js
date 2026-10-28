import { Usuario } from "../models/index.js"

export default {
    up: async() => {
        console.log("Insertamos usuarios...")

        await Usuario.findOrCreate({ where: { nombre: 'Administrador'},
            defaults: {
                email: 'administrador@gmail.com',
                passwordUsuario: '12345678'
            }
        })        
    },
    down: async() => {
        console.log("Eliminando todos los usuarios...")
        await Usuario.destroy({ where: {}, truncate: true, cascade: true})
    }
}