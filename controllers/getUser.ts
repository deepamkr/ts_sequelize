import db from '../models'

module.exports={
    get:async (req:any,res:any)=>{
        //const {email,name,username,password}= req.body
        
        try {
            const users = await db.User.findAll();
            return res.json(users);
          } catch (err) {
            console.log(err);
            return res.status(500).json({ error: 'Something went wrong!' });
          }
    }
}