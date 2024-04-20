import express from "express"
const app = express()
import dotenv from 'dotenv'
import mongoose from "mongoose"
dotenv.config()

import bookRoute from './route/book.route.js'

const PORT = process.env.PORT || 4000




//database connection

try {
    mongoose.connect(process.env.MONGODB_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
    console.log("MongoDB connection Successful");
} catch (error) {
    console.log("Error :",error)
}

//defining routes
app.use("/book",bookRoute)

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`)
})