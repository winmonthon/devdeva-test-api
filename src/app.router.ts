import express from 'express'

import UsersRouter from './modules/users/users-router'



const app = express()

//app.use('<-- /path -->', <-- Router -->)

app.use('/users', UsersRouter)

export default app
