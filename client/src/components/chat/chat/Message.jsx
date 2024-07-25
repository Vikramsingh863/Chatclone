import { useContext, useState } from "react"
import { AccountContext } from "../../../contextAPI/AccountProvider"
import { Box, Typography, styled } from "@mui/material"
import { formateDate, downloadMedia } from "../../../utils/utils"
import { Modal } from "./Modal"
import GetAppIcon from '@mui/icons-material/GetApp';
import { iconPDF } from "../../../constants/data"

const Own = styled(Box)`
    background: #dcf8c6;
    max-width: 60%;
    margin-left: auto;
    padding: 5px;
    width: fit-content;
    display: flex;
    border-radius: 10px;
    word-break: break-word;
    
`

const Wrapper = styled(Box)`
    background: #dcf8c6;
    max-width: 60%;
    margin-right: auto;
    padding: 5px;
    width: fit-content;
    display: flex;
    border-radius: 10px;
    word-break: break-word;
    

`
const Text = styled(Typography)`
    font-size: 14px;
    padding: 0 25px 0 5px; 

`
const Time = styled(Typography)`
    font-size: 10px;
    color: #919191;
    margin:top: 6px;
    word-break: keep-all;
    margin-top:auto;
`
const Image = styled(Box)`
    height:1000px;
    width:1000px;
    position:relative;
    z-index:10;
    border:50px solid black;
`
export const Messages = ({ message }) => {
    const { Account } = useContext(AccountContext)
    // const [modal, setModal] = useState()

//    const inlargeImage=()=>{
//             setModal("message");
//     }

    const ImageMessage = ({ message }) => {
        return (
            <Box style={{position:'relative'}}>
            
            
                {
                    
                    message?.text?.includes('.pdf') ?
                        <Box style={{display:'flex'}}>
                              <img src={iconPDF} alt="pdf" style={{width:80}} />
                              <Typography style={{fontSize:"14px"}}>{message.text.split('/').pop()}</Typography>
                        </Box> :
                        <img style={{width:250, height:'100',objectFit:"cover"}} src={message.text} alt={message.text} />
                }
                
                <Time style={{position:"absolute", bottom:0, right:0}}>
                 <GetAppIcon
                    style={{marginRight:10, border:'1px solid grey', borderRadius:'50%', fontSize:'small'}}
                 onClick={(e)=>downloadMedia(e,message.text)}
                 
                 
                 />
                 {formateDate(message.createdAt)} </Time>

            </Box>
        )
    }
    const TextMessage = ({ message }) => {
       return (
            <>
                <Text>{message.text} </Text>
                <Time>
                 
                    {formateDate(message.createdAt)} </Time>
            </>
        )
    }




    return (
        <>
            {message &&
                Account.sub === message.senderId ?
                <Own>
                   {message&& message.type ==='file'?<ImageMessage message={message} />: <TextMessage message={message} />}
                </Own> :
                <Wrapper>
                    {message&& message.type ==='file'?<ImageMessage message={message} />: <TextMessage message={message} />}
                </Wrapper>
            }

        </>

    )
    
}