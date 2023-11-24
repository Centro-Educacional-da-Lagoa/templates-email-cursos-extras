import express from "express"
import { Response, Request } from "express"
import 'dotenv/config'
const app = express()
const port = process.env.PORT


app.get( '/', ( req: Request, res: Response ) => {

} )

app.listen( port, () => {
    console.log( `Servidor rodando na porta: ${port}` )
} )