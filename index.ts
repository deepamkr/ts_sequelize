require("dotenv").config()
import express from 'express'
const app= express()
const port =process.env.PORT||3000;
import db from './models'

app.use(express.json())

app.use(express.urlencoded({extended: false}))
//read
app.use('/user',require('./routes/getUser'))

//read made in route and controller
// app.get('/user', async (req, res) => {
//     try {
//       const users = await db.User.findAll();
//       return res.json(users);
//     } catch (err) {
//       console.log(err);
//       return res.status(500).json({ error: 'Something went wrong!' });
//     }
//   });


db.sequelize.sync().then(()=>{
    app.listen(port,()=>{
        console.log(`App listening on port ${port}`)
    })
})


