const router = require("express").Router()
const UserController = require("../controllers/UserController")
const ArticleController = require("../controllers/ArticleController")
const authorizationReader = require("../middlewares/authorizationReader")

router.post("/register", UserController.register)
router.post("/login", UserController.login)

router.get("/articles", ArticleController.listArticles)

module.exports = router
