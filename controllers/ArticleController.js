const { Article } = require("../models/index")

class ArticleController {
  static async listArticles(req, res, next) {
    try {
      const articles = await Article.findAll()
      res.status(200).json(articles)
    } catch (err) {
      next(err)
    }
  }
  static async findArticleId(req, res, next) {
    const { id } = req.params
    try {
      const article = await article.findByPk(id)
      res.status(200).json(article)
    } catch (err) {
      next(err)
    }
  }
  static async postArticles(req, res, next) {
    try {
      const payload = {
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        UserId: req.loggedInUser.id,
      }
      const articles = await Article.create(payload)
      res.status(200).json(articles)
    } catch (err) {
      next(err)
    }
  }
  static async putArticles(req, res, next) {
    try {
      const id = req.params.id
      const { title, content, image } = req.body
      const updatedArticles = await Article.update(
        { title, content, image },
        {
          where: {
            id: id,
          },
          returning: true,
        }
      )
      res.status(200).json(updatedArticles)
    } catch (err) {
      next(err)
    }
  }
  static async patchArticles(req, res, next) {
    try {
      const id = req.params.id
      const { content, image } = req.body
      const updatedArticles = await Article.update(
        { content, image },
        {
          where: {
            id: id,
          },
          returning: true,
        }
      )
      res.status(200).json(updatedArticles)
    } catch (err) {
      next(err)
    }
  }
  static async deleteArticles(req, res, next) {
    try {
      const id = req.params.id
      const deletedArticles = await Article.destroy({
        where: {
          id: id,
        },
      })
      res.status(200).json({
        msg: "Sucessfull delete article",
      })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = ArticleController
