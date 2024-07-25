import { Box } from "@mui/material";
import Header from "./header";
import Searchvalue from "./search";
import Conversations from "./Conversation";
import { useState } from "react";
const Menu =()=>{
    const [text, setText]= useState()
    return(

        <Box>
            <Header/>
            <Searchvalue setText={setText} text={text}/>
            <Conversations text={text}/>
        </Box>
        
    )
}
export default Menu;