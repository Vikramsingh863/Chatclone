import express from 'express'
import mongoose from 'mongoose'
import User from '../schema/userSchema.js'
import { addUser, getUsers } from '../Controller/user-Controller.js'
import { newConversation, getConversation } from '../Controller/conversation-controller.js'
import { newMessage, getMessages } from '../Controller/message-controller.js'
import {uploadFile, getImage} from '../Controller/image-controller.js'
import upload from '../utils/upload.js'
const corsOptions = {
    origin:"*",
  }
const route = express.Router()
route.post('/add',addUser)
route.get('/users',getUsers)
route.post('/conversation/add', newConversation)
route.post('/conversation/get', getConversation)
route.post('/message/add',newMessage);
route.get('/message/get/:id',getMessages);
route.post('/file/upload/',cors(corsOptions),upload.single('file'),uploadFile);
route.get('/file/:filename/',getImage);
export default route;
