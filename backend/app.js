import express from "express"
import path from "path"
import { connect } from "./config/DB.config.js"
import dotenv from "dotenv"
import AuthRouter from "./routes/auth.routes.js"
import ProductRouter from "./routes/product.Routes.js"
import cookieParser from "cookie-parser"
import fileRouter from "./routes/Image.routes.js"
import cors from 'cors'
const app = express()
dotenv.config()
connect()
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    credentials:true
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use('/upload', express.static(path.join(process.cwd(), 'upload')))
app.get('/',(req,res)=>{
    res.send("hello")
})
app.use('/api/v1',AuthRouter)
app.use('/api/v1',fileRouter)
app.use('/api/v1/product',ProductRouter)
app.listen(5000,()=>{
    console.log("server is running")
})