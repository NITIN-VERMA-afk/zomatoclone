const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose');
const database=module.export=()=>{
  const connectionParams={
    useNewUrlParser:true,
    useUnifiedTopology:true,
  }
  try {
     mongoose.connect('mongodb+srv://nitinvermanv61506:61506@cluster0.ytwoerc.mongodb.net/?retryWrites=true&w=majority')
     console.log("database connect sucsessfuly")
  } catch (error) {
    console.log("error!database connection failed")
    
  }
}
database();









app.get('/', (req, res) => {
  res.send('zomato clone!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})