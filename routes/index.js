const router = require("express").Router()
const adminRoutes = require("./adminRoutes")
const userReaderRoutes = require("./userReaderRoutes")

router.use("/users", userReaderRoutes)
router.use(adminRoutes)

module.exports = router
