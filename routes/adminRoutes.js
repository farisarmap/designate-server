const router = require("express").Router()
const UserController = require("../controllers/UserController")
const ArticleController = require("../controllers/ArticleController")
const authentication = require("../middlewares/authentication")
const authorizationAdmin = require("../middlewares/authorizationAdmin")

router.get("/articles", ArticleController.listArticles)
router.get("/articles/:id", ArticleController.findArticleId)
router.post("/users/admin/register", UserController.register)
router.post("/users/admin/login", UserController.login)

router.use(authentication)
router.post("/articles", authorizationAdmin, ArticleController.postArticles)
router.put("articles/:id", authorizationAdmin, ArticleController.putArticles)
router.patch(
  "articles/:id",
  authorizationAdmin,
  ArticleController.patchArticles
)
router.delete(
  "articles/:id",
  authorizationAdmin,
  ArticleController.deleteArticles
)

module.exports = router
