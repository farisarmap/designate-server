const { verifyToken } = require("../helpers/jwt")
const { User } = require("../models")

function authentication(req, res, next) {
  const { access_token } = req.headers

  if (access_token) {
    const decoded = verifyToken(access_token)
    User.findOne({
      where: {
        email: decoded.email,
      },
    })
      .then((user) => {
        if (user) {
          req.loggedInUser = {
            id: decoded.id,
            email: decoded.email,
            type: decoded.type,
          }
          next()
        } else {
          next({
            message: "Invalid Access Token",
            name: "Unauthorized",
          })
        }
      })
      .catch((err) => {
        next(err)
      })
  } else {
    next({
      message: "You have to login first!",
      name: "Unauthorized",
    })
  }
}

module.exports = authentication
