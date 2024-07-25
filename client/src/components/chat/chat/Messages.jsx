import { Box, styled } from "@mui/material"
import Footer from "./footer"
import { AccountContext } from "../../../contextAPI/AccountProvider"
import { useContext, useState, useEffect, useRef } from "react"
import { getMessage, newMessage } from "../../../Service/api"
import { Messages } from "./Message"
const Wrapper = styled(Box)`
    background-image:url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png');
    background-size:50%;
    
`
const Component = styled(Box)`

    height:75vh;
    overflow-y:scroll;
    
`

const Container = styled(Box)`
    padding: 1px 80px;
    
`

const Message = ({ person, conversation }) => {
    const { Account, socket, setNewMessgeFlag, newMessageFlag } = useContext(AccountContext)
    const [value, setValue] = useState()
    const [messages, setMessages] = useState([])
    const [image, setImage] = useState()
    const [file, setFile] = useState();
    const [incomingMessage, setIncomeingMessage] = useState(null);
    const scrollRef = useRef();
    
    useEffect(()=>{
        socket.current.on('getMessage',data=>{
            console.log(data)
            setIncomeingMessage({
                ...data, createdAt: Date.now()
            })
        })      
    },[])
        


    useEffect(() => {
        const getMessageDetails = async () => {
            let data = await getMessage(conversation._id);
            setMessages(data)
        }
        conversation._id && getMessageDetails();
    }, [person._id, conversation._id, value])

    useEffect(()=>{
        scrollRef.current?.scrollIntoView({ transition:'smooth'})
    },[messages])

    useEffect(()=>{
        incomingMessage&&console.log(incomingMessage)
        incomingMessage&& 
        setMessages(prev =>[...prev, incomingMessage])
    },[incomingMessage, conversation])

    
    const sendText = async (e) => {
        
        if (e.which === 13 || e==true) {
            let message = {};
            if (!file) {
                message = {
                    senderId: Account.sub,
                    receiverId: person.sub,
                    conversationId: conversation._id,
                    type: 'text',
                    text: value,
                
                };
                
            }
            else {
                message = {
                    senderId: Account.sub,
                    receiverId: person.sub,
                    conversationId: conversation._id,
                    type: 'file',
                    text: image,
                }
                
            }
            setFile()
            setImage('')
            setValue('')
            socket.current.emit('sendMessage',message);

            await newMessage(message);
            
            
        }


    }

    return (
        <Wrapper>

            <Component  >
                
                {  messages &&messages.map((message) => (
                    <Container ref={scrollRef} ><Messages message={message} /></Container>
                ))}
            </Component>


            <Footer sendText={sendText}
                setValue={setValue}
                file={file}
                setFile={setFile}
                value={value}
                setImage={setImage} />
        </Wrapper>
    )
}
export default Message