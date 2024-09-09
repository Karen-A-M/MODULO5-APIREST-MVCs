import express, {json, Request, Response} from "express"

const app = express()

app.use(json())

app.use("/status", (request: Request, response: Response) => {
    response.status(200).json({
        status: "OK",
        environment: process.env.ENVIRONMENT
    })
})

export default app