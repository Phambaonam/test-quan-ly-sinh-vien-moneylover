const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const nunjucks = require('nunjucks')
const port = 3000
const router = express.Router()

const userRouter = require('./router/user')
const db = require('./config/config')

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())

app.use(router)
nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: true,

})

app.engine('html', nunjucks.render)

app.set('view engine', 'html')

userRouter(router, db)

app.listen(port, () => {
    console.log(`server on running on port ${port}.`)
})