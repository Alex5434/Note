const express = require('express')
const app = express()
const bcrypt = require("bcrypt")
const port = process.env.port || 5001

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static('/home/alex/Desktop/Mern/Notes/notes-frontend/public/index.html'))


app.get('/', (req, res)=>{
  res.send("Hello")
})

app.post('/', async (req, res)=>{
  const {title, content, password} = req.body;
  console.log(title, content, password);
  const userpassword = "Alex5434#";
  const salt = await bcrypt.genSalt();
  const newPass = await bcrypt.hash(password, salt);
  const match =await bcrypt.compare(userpasswordnewPass);
  console.log(match);
  if(!match){
    return res.status(404).json({success:false, msg:"Please enter the valid password"})
  }
  res.status(201).send('index.html')
})

app.listen(port)