import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Carrito = sequelize.define("Carrito",
  {
    idCarrito: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idCliente: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fechaCreacion: {
        type: DataTypes.TIME,
        allowNull: false,
    }
  },
  {
    tableName: "carritos",
  },
);

export default Carrito;
