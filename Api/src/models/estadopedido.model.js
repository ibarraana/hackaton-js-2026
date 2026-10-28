import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const EstadoPedido = sequelize.define('EstadoPedido', {

  idEstado: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descripcion: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
}, {
  tableName: 'estado_pedidos'
})

export default EstadoPedido