const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/postgres');

class Usuario extends Model {}

Usuario.init({
  username: { type: DataTypes.STRING, unique: true },
  email: { type: DataTypes.STRING, validate: { isEmail: true }},
  password: DataTypes.STRING
}, { sequelize, modelName: 'usuario' });

module.exports = Usuario;
