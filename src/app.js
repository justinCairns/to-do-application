const express = require('express')
const path = require('path')
const hbs = require('hbs')

const indexRouter = require('./routers/index')
const assignmentsRouter = require('./routers/assignments') 
const resourcesRouter = require('./routers/resources') 
const loginRouter = require('./routers/login') 
const createAccountRouter = require('./routers/create-account') 
const mainRouter = require('./routers/main') 
const _404Router = require('./routers/404')
const tasksRouter = require('./routers/tasks')

const app = express()

const dir = path.join(__dirname, "../public")
app.use(express.static(dir))

app.set('view engine', 'hbs')

const viewsPath = path.join(__dirname, "../templates")
app.set('views', viewsPath)

const partialsPath = path.join(__dirname, "../templates/partials")
hbs.registerPartials(partialsPath)

app.use(indexRouter) 
app.use(assignmentsRouter) 
app.use(resourcesRouter)
app.use(loginRouter)
app.use(createAccountRouter)
app.use(mainRouter)
app.use(tasksRouter)    
app.use(_404Router) 


const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})