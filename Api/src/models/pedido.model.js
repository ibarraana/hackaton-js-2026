import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Pedido = sequelize.define('Pedido', {

  idPedido: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  idCarrito: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  idCliente: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fecha: {
    type: DataTypes.TIME,
    allowNull: false
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  idEstado: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'pedidos'
})

export default Pedido