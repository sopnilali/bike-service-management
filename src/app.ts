import express, { Application } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
const app : Application = express();

//middleware
app.use(cors({
    origin: ['localhost:3000'],
    credentials: true
}))

// parser
app.use(cookieParser())
app.use(express.json())

app.use('/api', router) // all route

app.get('/', (req, res)=> {
    res.json({
        status: true,
        message: "Bike Service Management API IS LIVE 👑 🛠"
    })
})

app.use(globalErrorHandler) // global error handler
app.use(notFound) // wrong api call without crash server

export default app