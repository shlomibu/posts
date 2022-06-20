import "dotenv/config"
import express, { Application } from "express"
import router from "./router/postRouter" 
import connectDB from "./db"

const PORT: number = Number(process.env.PORT),
    app:Application = express()
connectDB()
app.use(express.json())

app.use("/post",router)


app.listen(PORT,()=>console.log(`server is running. PORT:${PORT}`)
)
