import { useContext } from "react";
import  { AccountContext } from "../../../contextAPI/AccountProvider";
import { Box, styled } from "@mui/material";
import {Chat as MessageIcon} from '@mui/icons-material'
import HeaderMenu from "./HeaderMenu";

import InfoDrawer from "../../drawer/InfoDrawer";
import { useState } from "react";
const Picture = styled('img')({
   height:40,
   width:40,
    borderRadius: '50%'
})

const Component = styled(Box)`
    height:44px;
    background:#ededed;
    padding:8px 16px;
    display:flex;
    align-items:center;

`
const Wrapper  = styled(Box)`
    margin-left:auto;
    &>*{
        margin-left:2px;
        padding:8px;

    }
    &:first:child{
        font-size:22px;
        margin-right:8px;
        margin-top:3px;

    }
`



const Header=()=>{
    const {Account} = useContext(AccountContext)
    const [open, setOpen]= useState(false)
    const toggleDrawer=()=>{
        setOpen(true)
    }
    
    
    return(
        <Component>
            <Picture src={Account.picture} alt="" onClick={()=>toggleDrawer()} />
            <Wrapper>
                <MessageIcon/>
                <HeaderMenu open={open} setOpen={setOpen}/>
                
            </Wrapper>
                <InfoDrawer open={open} setOpen={setOpen}/>
        </Component> 
          
    )
}

export default Header;