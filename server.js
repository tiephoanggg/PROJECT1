
import express from 'express'
import 'dotenv/config'
import { respontData } from './middleware/middleware'

const app = express()

const hostname = 'localhost'
const port = process.env.PORT

app.use(respontData)

app.get('/', (req, res) => {
    // return res.json({
    //     status : 200, 
    //     data: "thienvd"
    // })
   res.send('hello world')
});

app.listen(3000, () => {
    console.log(`Server is running on port ${port}`);
});