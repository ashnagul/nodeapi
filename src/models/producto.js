const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/postgres');

class Producto extends Model {}

Producto.init({
    nombreProducto: { type: DataTypes.STRING, unique: true},
    precio: DataTypes.DECIMAL,
    descripcion: DataTypes.STRING,
    categoria: DataTypes.STRING,
    vigencia: DataTypes.DATE
}, { sequelize, modelName: 'producto' });

module.exports = Producto;
