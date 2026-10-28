// Pendiente → En preparación → Enviado → Entregado o Cancelado

import { EstadoPedido } from "../models/index.js"

export default {
    up: async() => {
        console.log("Insertamos estado de pedidos...")

        await EstadoPedido.findOrCreate({ where: { descripcion: 'Pendiente'} })
        await EstadoPedido.findOrCreate({ where: { descripcion: 'En preparación'} })
        await EstadoPedido.findOrCreate({ where: { descripcion: 'Enviado'} })
        await EstadoPedido.findOrCreate({ where: { descripcion: 'Entregado'} })
        await EstadoPedido.findOrCreate({ where: { descripcion: 'Cancelado'} })
    },
    down: async() => {
        console.log("Eliminando todos los estado de pedidos...")
        await EstadoPedido.destroy({ where: {}, truncate: true, cascade: true})
    }
}