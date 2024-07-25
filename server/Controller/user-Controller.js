
import { response } from "express"
import User from "../schema/userSchema.js"

export const addUser= async (req,res)=>{
    try {
       let exist = await User.findOne({sub:req.body.sub})
       if(exist){
            res.status(200).json({
                message: 'User already exist'
                
            })
            return;
       }
       const newUser = new User(req.body)
       await newUser.save();
       response.status(200).json(newUser)
    } catch (error) {
        console.log("Error during inserting data",error)
    }
}   


export const getUsers = async(req, res)=>{
    try {
      const users  = await User.find({})
      return res.status(200).json(users)  
    
    
    } catch (error) {
       return response.status(500).json(error.message); 
    }
}