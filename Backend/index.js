import express, { response } from "express"
import cors from 'cors'
import db from './database/db.js'
import router from "./routers/routes.js"
import RoutesUsers from "./routers/RoutesUsers.js"
import RoutesLogin from "./routers/auth.js"
import RouteSedes from "./routers/sedes.js"
import RouteBienes from "./routers/bienes.js"
import RouteNeabienes from "./routers/neabienes.js"
import RouteNeaEntradas from "./routers/neaentradas.js"
import RoutePecosaBienes from "./routers/pecosabienes.js"
import RoutePecosaPedidos from "./routers/pecosapedidos.js"
import session from "express-session"
import dotenv from "dotenv"
import SequelizeS  from "connect-session-sequelize"

dotenv.config()

const sessionS = SequelizeS(session.Store)
const store = new sessionS({
    db : db
})


const app = express()
app.use(express.json())
app.use(cors({
    credentials: true,
    origin:'http://localhost:3000'
}))
app.use(session({
    secret: process.env.S_SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto',
    }
})
)   

app.use('/login',RoutesLogin)
app.use('/user',router)
app.use('/admin',RoutesUsers)
app.use('/sedes', RouteSedes)
app.use('/bienes', RouteBienes)
app.use('/neasbienes', RouteNeabienes)
app.use('/neasentradas', RouteNeaEntradas)
app.use('/pecosabienes', RoutePecosaBienes)
app.use('/pecosapedidos', RoutePecosaPedidos)

try {
    await db.authenticate()
    console.log('Authenticated successfully DB')
} catch (error) {
    console.log(`Error conextion DB : ${error}`)
}

//store.sync()

/*app.get('/',(req,res)=>{
    res.send('Hola mundo')
})
*/
app.listen(process.env.APP_PORT, () => {
    console.log('Server Up running in', process.env.APP_PORT)
})


