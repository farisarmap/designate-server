const { User } = require("../models/index")

async function authorizationAdmin(req, res, next) {
  try {
    const user = await User.findByPk(req.loggedInUser.id)
    if (user.type === "Admin" || user.type === "admin") {
      next()
    } else if (user.type === "Reader" || user.type === "reader") {
      next({
        name: "Unauthorized",
        message: "Only administrator can access!",
      })
    }
  } catch (err) {
    next(err)
  }
}

module.exports = authorizationAdmin
