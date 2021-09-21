const { User } = require("../models/index")
const { checkPassword } = require("../helpers/bcrypt")
const { generateToken } = require("../helpers/jwt")

class UserController {
  static async register(req, res, next) {
    try {
      const { email, password, type } = req.body
      const user = await User.create({
        email,
        password,
        type,
      })
      res.status(201).json({
        msg: `User with email ${email} created!`,
      })
    } catch (err) {
      next(err)
    }
  }
  static async login(req, res, next) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({
        where: {
          email: email,
        },
      })
      if (!user) {
        res.status(401).json({
          msg: "User not found!",
        })
      } else if (!checkPassword(password, user.password)) {
        res.status(401).json({
          msg: "Invalid email or password",
        })
      } else if (checkPassword(password, user.password)) {
        const access_token = generateToken({
          id: user.id,
          email: user.email,
          role: user.role,
        })
        res.status(200).json({
          access_token,
          msg: `${email} logged in!`,
        })
      }
    } catch (err) {
      next(err)
    }
  }
}

module.exports = UserController
