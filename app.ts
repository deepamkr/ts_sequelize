// const express= require('express')
require("dotenv").config()
import express from 'express'
const app= express()
const port =process.env.PORT||3000;
import db from './models'
import {users} from './seeders/users';

db.sequelize.sync().then(()=>{
    app.listen(port,()=>{
        console.log(`App listening on port ${port}`)
    })
})


