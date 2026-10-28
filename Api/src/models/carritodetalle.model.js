import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const CarritoDetalle = sequelize.define("CarritoDetalle",
  {
    idCarritoDetalle: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    idCarrito: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
  },
  {
    tableName: "carrito_detalles"
  },
);

export default CarritoDetalle
