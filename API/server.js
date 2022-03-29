require("dotenv").config()

const express = require('express')
const { errorController } = require("./middleware/errorsMiddleware")
const connectDb = require('./config/db')
const app = express()

connectDb()

const port = process.env.PORT || 5000

// Midelwares
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// Routes
app.use('/api/tickets',require('./routes/tickets'))
app.use('/api/dashboard',require('./routes/dashboard'))
app.use('/api/page',require('./routes/page'))
app.use('/api/viewPage',require('./routes/viewPage'))



// Error Middelwar
app.use(errorController)


app.listen(port, () => console.log("server starting in port :" + port))