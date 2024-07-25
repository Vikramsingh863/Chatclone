import mongoose, { Schema} from "mongoose";
const MessageSchema = new Schema({
    senderId:{
        type: String
    },
    receiverId:{
        type: String
    },
    conversationId :{
       type: String
    },
    type:{
        type:String
    },
    text:{
        type: String
    }
},{timestamps:true})
const message = mongoose.model('Message', MessageSchema)
export default message;