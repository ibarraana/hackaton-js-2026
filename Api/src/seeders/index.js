import { sequelize, testConnection } from "../config/database.js";

import clienteSeeders from "./clienteSeeders.js"
import productoSeeders from "./productoSeeders.js"
import usuarioSeeders from "./usuarioSeeders.js"
import estadoPedidoSeeders from './estadoPedidoSeeders.js'
import carritoSeeders from './carritoSeeders.js'
import carritoDetalleSeeders from './carritoDetalleSeeders.js'
import pedidoSeeders from './pedidoSeeders.js'
import detallePedidoSeeders from './detallePedidoSeeders.js'

const runSeeds = async () => {
  try {
    console.log("--- Iniciando Proceso de Seeding Global ---")

    await testConnection();

    await sequelize.sync({ force: false });

    await clienteSeeders.up()
    await productoSeeders.up()
    await usuarioSeeders.up()
    await estadoPedidoSeeders.up()
    await carritoSeeders.up()
    await pedidoSeeders.up()
    await carritoDetalleSeeders.up()    
    await detallePedidoSeeders.up()

    console.log("✅ Todos los seeders se ejecutaron con éxito.")
    process.exit(0)
  } catch (error) {
    console.error("💥 Error durante el proceso de seeding:", error)
    process.exit(1)
  }
}

runSeeds()
