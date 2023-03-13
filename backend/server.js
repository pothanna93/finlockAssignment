const express = require("express");  
const app = express() 
const mongoose = require("mongoose") 
const dotenv = require("dotenv") 
const routeUrl = require("./routes/router") 
const cors = require("cors")

dotenv.config()



//mongoose.connect(process.env.DATABASE_ACCESS) 

const connectDB =  async() => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.DATABASE_ACCESS) 
        console.log('Mongo connected')
    } catch(error) {
        console.log(error)
        process.exit()
    }
}

// module.exports = connectDB 
connectDB()

app.use(express.json())
app.use(cors())
app.use('/app',routeUrl)
app.listen(4001,()=>console.log("backend server is running"))