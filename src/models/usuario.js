const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/postgres');
const bcrypt = require('bcrypt');


class Usuario extends Model {}

Usuario.init({
  userName: { type: DataTypes.STRING, unique: true , allowNull: false},
  email: { type: DataTypes.STRING, validate: { isEmail: true }, allowNull: false},
  password: { type: DataTypes.STRING, allowNull: false }
}, { 
  sequelize, 
  modelName: 'usuario',
  hooks: {
    afterValidate: function (usuario) {
      usuario.password = bcrypt.hashSync(usuario.password, 8)
    }
  }
});

module.exports = Usuario;
