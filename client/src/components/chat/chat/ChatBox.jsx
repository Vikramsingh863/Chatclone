import { Box } from "@mui/material"
import ChatHeader from "./ChatHeader"
import Message from "./Messages"
import { useContext, useEffect, useState } from "react"
import { AccountContext } from "../../../contextAPI/AccountProvider"
import { getConversation } from "../../../Service/api"
const ChatBox=({person})=>{
    const {Account} = useContext(AccountContext)
const [conversation, setConversation] = useState([]);
useEffect(()=>{
    const getConversationDetails = async()=>{
      let data = await getConversation({senderId:Account.sub, receiverId:person.sub})
      setConversation(data);
    }
    getConversationDetails();
},[person.sub])


return(
    <Box>
        
        <ChatHeader person={person}/> 
        <Message person={person} conversation={conversation}/>
    </Box>
)
}
export default ChatBox