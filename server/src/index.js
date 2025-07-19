import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/userRoutes.js'
dotenv.config()


const app=express()

const PORT=process.env.PORT

app.use(cors())
app.use(express.json())

app.use('/api/auth',authRoutes)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})