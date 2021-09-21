if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}
const express = require("express")
const app = express()
const cors = require("cors")
const port = 5000
const routes = require("./routes/index")
const errorHanler = require("./middlewares/errorHandler")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(routes)
app.use(errorHanler)

// app.listen(port, () => {
//   console.log(`Listening to port ${port}`)
// })

module.exports = app
