"use strict"
const { Model } = require("sequelize")
const { hashPassword } = require("../helpers/bcrypt")
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Article, {
        foreignKey: "UserId",
      })
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      type: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate(user) {
          user.password = hashPassword(user.password)
        },
      },
      sequelize,
      modelName: "User",
    }
  )
  return User
}
