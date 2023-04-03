import express from 'express'
const router =express.Router()
const controller =require('../controllers/getUser')
//const path=require('path')

//create user
router.use(express.json())

router.get('/',controller.get)
module.exports= router