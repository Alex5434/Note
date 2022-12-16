const express =  require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routeurl = require('./routes/router')
const cors = require('cors')

dotenv.config()

mongoose.connect(process.env.DATABASE, ()=>console.log('database connected'))

app.use(express.json())
app.use(cors())
app.use('/app', routeurl)

app.listen(3001, ()=>{
  console.log(`server is running on 3001...`);
})