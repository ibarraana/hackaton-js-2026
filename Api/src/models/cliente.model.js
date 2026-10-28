import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Cliente = sequelize.define("Cliente",
  {
    idCliente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    razonSocial: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fechaIngreso: {
        type: DataTypes.TIME,
        allowNull: false,
    }
  },
  {
    tableName: "cliente",
  },
);

export default Cliente
