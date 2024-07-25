
import { MoreVert } from "@mui/icons-material"
import { MenuItem, Menu, styled } from "@mui/material"
import { useState } from "react"
import InfoDrawer from "../../drawer/InfoDrawer"

const MenuOption = styled(MenuItem)`
    font-size:14px;
    padding:15px 60px 5px 24px;
    color: #4A4A4A
`

const HeaderMenu=(props)=>{
    const DrawerOpen= props.open;
    const setDrawerOpen = props.setOpen

const[open, setOpen]= useState(null)

  const  handleClose=()=>{
    setOpen(null)
    setDrawerOpen(true)
    }

    const handleClick=(e)=>{

        setOpen(e.currentTarget)
    }
    return(

        <>
        <MoreVert onClick={handleClick}/>
        <Menu
        
        anchorEl={open}
        open={open}
        onClose={handleClose}
        keepMounted
        getContentAnchorE1={null}
        anchorOrigin={{vertical:'bottom',
        horizontal:'center'}}
        transformOrigin={{
            vertical: 'top',
            horizontal:'right'
        }}
      >
        <MenuOption onClick={handleClose}>Profile</MenuOption>
        <InfoDrawer open={DrawerOpen} setOpen={setDrawerOpen} />
      </Menu>
        </>
    )
}
export default HeaderMenu