import { Box, Dialog, styled } from "@mui/material"
import Menu from "./menu/menu";
import EmptyChat from "./chat/EmptyChat";
import ChatBox from "./chat/ChatBox";
import { useContext, useState } from "react";
import { AccountContext } from "../../contextAPI/AccountProvider";
import { red } from "@mui/material/colors";

const dialogStyle ={
    height: '95%',
    
    width:'100%',
    margin:'20px',
    marginTop: '3%',
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    overflow: 'hidden' ,
    borderRadius: 0 ,
    
    paddingTop:'20px'
}
const RightComponent = styled(Box)`
    width:73%;
    min-width: 300px;
    height:100%;
    border-left: 1px solid rgba(0,0,0,0.14);
    
`

const Component = styled(Box)`
    display:flex;
    
    

`

const LeftComponent = styled(Box)`
min-width:450px;
`



const ChatDialog =()=>{
    const {person} = useContext(AccountContext)
    // console.log(person)
    return(
        <Dialog
                open={true}
                    PaperProps={{sx: dialogStyle}}
                    hideBackdrop={true}
                    maxWidth={'md'}
                    >
                        <Component>
                            <LeftComponent>
                                <Menu/>
                            </LeftComponent>
                            <RightComponent>
                                {!person?
                                <EmptyChat/>:
                                <ChatBox person={person}/>
                                
                            }
                            </RightComponent>
                        </Component>
        </Dialog>
        
        
    )
}
export default ChatDialog