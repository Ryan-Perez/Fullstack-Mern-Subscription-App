import express from 'express'
import authRoutes from "./routes/auth"
import mongoose from 'mongoose';
import dotenv from "dotenv"
import cors from "cors"


dotenv.config()

const uri = "mongodb+srv://gutbole:ryanperez55@cluster0.9ojvt.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(
    process.env.MONGO_URI as string
)
.then(() => {
    console.log('Connected to Mongodb')

    const app = express();

    app.use(express.json())
    app.use(cors())
    app.use("/auth", authRoutes)

    app.listen(8080, () => {
        
        console.log('Now listening to port 8080')
    })
})
.catch((error) => {
    console.log({error})
    throw new Error(error)
})
