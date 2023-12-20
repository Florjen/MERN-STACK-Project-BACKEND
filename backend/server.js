const express = require('express')
const mongoose = require('mongoose')
require("dotenv").config()
const workoutRoutes = require("./routes/workouts")
const userRoutes = require('./routes/user')
const app = express()

//Middlewares
app.use(express.json())


//Routes
app.use("/api/workouts",workoutRoutes)
app.use('/api/user',userRoutes)


mongoose.connect(process.env.MONGO_URL)
.then(() =>{
app.listen(process.env.PORT,() =>{
console.log('Started database and Server on port 3000')
})
}).catch((err) =>{
    console.log(err)
})


