
import express from 'express'
import router_ from './routes/product.routes.js'
import errorMiddleWares from './middlewares/products.errorMiddleware.js'

const app = express()
app.use(express.json())

app.use("/products" , router_)

app.use(errorMiddleWares)

export default app

