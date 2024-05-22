const express = require('express');
const authRoutes = require('./routes/auth')
const userRouter = require('./routes/users')

const app = express();
app.use(express.json())



//routes
app.use(authRoutes)
app.use('/api/users',userRouter)

module.exports = app