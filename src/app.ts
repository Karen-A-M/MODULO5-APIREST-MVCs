import express, {json, Request, Response} from "express"
import indexRouter from "./routes"
import errorHandler from "./middlewares/error-handler"

const app = express()

app.use(json())

app.use("/status", (request: Request, response: Response) => {
    response.status(200).json({
        status: "OK",
        environment: process.env.ENVIRONMENT
    })
})

app.use("/", indexRouter)

app.use(errorHandler)

export default app