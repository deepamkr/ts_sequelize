import express from 'express'
const router =express.Router()
const controller =require('../controllers/postUser')
//const path=require('path')

//create user
router.use(express.json())

router.post('/',controller.post)
module.exports= router