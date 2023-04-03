// const express= require('express')
require("dotenv").config()
import express from 'express'
const app= express()
const port =process.env.PORT||3000;
import db from './models'
//import {users} from './seeders/users';
const { sequelize,User,Project }= require('./models')


app.use(express.json())

//post or create
app.post('/user',async(req,res)=>{
    const {name,email,password}= req.body
    try{
        const user =await db.User.create({name,email,password})
        return res.json(user)
    }
    catch(err){
            console.log(err)
            return res.status(500).json(err)
    }
})


//read
app.get('/user', async (req, res) => {
    try {
      const users = await db.User.findAll();
      return res.json(users);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: 'Something went wrong!' });
    }
  });

// const createUsers=()=>{
//     users.map(user =>{
//         db.User.create(user)
//     })
// }
// createUsers()


db.sequelize.sync().then(()=>{
    app.listen(port,()=>{
        console.log(`App listening on port ${port}`)
    })
})


