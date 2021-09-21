async function authorizationReader(req, res, next) {
  try {
    if (req.loggedInUser.role === "Reader") {
      next()
    } else {
      next({
        message: "This access_token is for Administrator",
        name: "Unauthorized",
      })
    }
  } catch (err) {
    next(err)
  }
}

module.exports = authorizationReader
