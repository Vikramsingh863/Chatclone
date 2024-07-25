import message from "../model/Message.js"
import Conversation from "../model/Conversation.js"


export const newMessage =async(req, res)=>{
    
    
    try {
        let newMessage =new message(req.body)
        await newMessage.save();
        await Conversation.findByIdAndUpdate(req.body.conversationId,{message:req.body.text})
        return res.status(200).json('message send successfully')
        // return res.status(200).json("all right")
    } catch (error) {
        return res.status(500).json(error.message)
    }

}

export const getMessages = async(req, res)=>{
    try {
        const messages = await(message.find({conversationId:req.params.id}))
        return res.status(200).json(messages)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}