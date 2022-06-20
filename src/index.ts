import "dotenv/config"
import express, { Application } from "express"
import router from "./router/postRouter" 

const PORT: number = Number(process.env.PORT),
    app:Application = express()

app.use(express.json())

app.use("/",router)


app.listen(PORT,()=>console.log(`server is running. PORT:${PORT}`)
)
