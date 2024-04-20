import express from "express"
const app = express()
import dotenv from 'dotenv'
import mongoose from "mongoose"
dotenv.config()

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

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`)
})