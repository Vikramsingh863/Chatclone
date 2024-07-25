import { Box, Typography, styled } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { AccountContext } from "../../../contextAPI/AccountProvider"
import { setConversation, getConversation } from "../../../Service/api"
import { formateDate } from "../../../utils/utils"
const Component = styled(Box)`
        display: flex;
        height:45px;
        padding:13px 0;
        cursor: pointer;
`
const Image = styled('img')({
    width: 50,
    height: 50,
    borderRadius: '50%',
    padding: '0 14px'

})
const Container = styled(Box)`
display :flex`
const Timestamp = styled(Typography)`
    font-size: 12px;
    margin-left: auto;
    color: #00000099;
    margin-right:20px;
    
`
const Text = styled(Typography)`
    font-size: 14px;
    
    color: #00000099;
    margin-right:20px;
     white-space: nowrap;
     width: 200px; 
  overflow: hidden;       
  text-overflow: ellipsis;
  
    
`
export const UserConversations = ({ res }) => {
    const { Account, setPerson, newMessageFlag } = useContext(AccountContext)
    const [message, setMessage] = useState({})
    // console.log(Account.sub)
    useEffect(() => {
        const getConversationDetails = async () => {
            const data = await getConversation({ senderId: Account.sub, receiverId: res.sub })

            setMessage({ text: data?.message, timestamp: data?.updatedAt })
        }
        getConversationDetails();
    }, [newMessageFlag])

    const getUser = async () => {
        setPerson(res);
        await setConversation({ senderId: Account.sub, receiverId: res.sub })

    }



    return (
        <Component onClick={() => getUser()}>
            <Box>
                <Image src={res.picture} alt="" />
            </Box>
            <Box style={{width:'100%'}}>
                <Container>
                    <Typography>{res.name}
                    </Typography>
                    {
                        message?.text &&
                        <Timestamp>{formateDate(message?.timestamp)}</Timestamp>
                    }
                </Container>
                <Box>
                    {/* deployment  */}
                    <Text>{message?.text?.includes('localhost') ? 'media' : message.text}</Text>
                </Box>
            </Box>

        </Component>
    )
} 