const bcrypt = require("bcrypt")
const SALT = process.env.SALT

const hashPassword = (password) => {
  return bcrypt.hashSync(password, SALT)
}

const checkPassword = (password, encryptedPassword) => {
  return bcrypt.compareSync(password, encryptedPassword)
}

module.exports = {
  hashPassword,
  checkPassword,
}
