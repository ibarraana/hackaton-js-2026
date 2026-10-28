import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Producto = sequelize.define("Producto",
  {
    idProducto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    precioUnitario: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false,
    }
  },
  {
    tableName: "productos",
  },
);

export default Producto
