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
        type: DataTypes.DATE,
        allowNull: false,
    }
  },
  {
    tableName: "clientes",
  },
);

export default Cliente
