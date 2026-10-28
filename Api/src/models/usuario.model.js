import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Usuario = sequelize.define('Usuario', {

  idUsuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(25),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  passwordUsuario: {
    type: DataTypes.STRING(25),
    allowNull: false
  },
  codigoRecuperacion: {
    type: DataTypes.STRING(8),
    allowNull: true
  }
}, {
  tableName: 'usuarios'
})

export default Usuario