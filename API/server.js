require("dotenv").config()

const express = require('express')
const app = express()


const port = process.env.PORT || 5000

// Routes
app.use('/api/tickets',require('./routes/tickets'))
app.use('/api/dashboard',require('./routes/dashboard'))
app.use('/api/page',require('./routes/page'))
app.use('/api/viewPage',require('./routes/viewPage'))

app.listen(port, () => console.log("server starting in port :" + port))