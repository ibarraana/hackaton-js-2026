import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const DetallePedido = sequelize.define('DetallePedido', {

  idPedidoDetalle: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  idPedido: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  idProducto: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  subTotal: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
}, {
  tableName: 'detalles_pedido'
})

export default DetallePedido