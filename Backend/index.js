const express = require('express')
const app = express()
const port = 5000
const cors=require('cors')
const dotenv=require('./Routes/auth')

const mongoose = require('mongoose');
const database=module.export=()=>{
  const connectionParams={
    useNewUrlParser:true,
    useUnifiedTopology:true,
  }
  try {
     mongoose.connect('mongodb+srv://nitinvermanv61506:61506@cluster0.ytwoerc.mongodb.net/?retryWrites=true&w=majority/userDB',{useNewUrlParser:true});
     console.log("database connect sucsessfuly")
  } catch (error) {
    console.log("error!database connection failed")
    
  }
}
database();

const userSchema=new mongoose.Schema({
  name:String,
  password:String,
});

const user=mongoose.model("userName",userSchema);

const userName =new user({
  name:"nitin",
  password:"1234",
})

userName.save()



app.get('/', (req, res) => {
  res.send('zomato clone!')
})
app.use('/',require('./Routes/auth'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})