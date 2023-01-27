import express from 'express'
import authRoutes from './routes/auth.routes'
import clientRoute from './routes/clients.routes'

const app = express()
app.use(express.json())

app.use(authRoutes)
app.use(clientRoute)

app.listen(3000)
console.log("Server on port", 3000)