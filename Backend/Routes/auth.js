const express=require('express');
const Router=express.Router();
const cors=require('cors')
const{test}=require('../controllers/authcontroller')


// middelware
Router.use(cors({
    cordinates:true,
    origin:'http://localhost:3000'

}))

Router.get('/',test)
module.exports=router