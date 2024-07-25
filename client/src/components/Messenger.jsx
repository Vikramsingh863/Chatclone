import LoginDialog from "./account/LoginDialog"
import { AppBar, Toolbar, styled, Box } from '@mui/material';
import ChatDialog from "./chat/ChatDialog";

import { useContext } from "react";
import { AccountContext } from "../contextAPI/AccountProvider";
const Component = styled(Box)`
heigh:100vh;
background: #DCDCDC;
`
const ChatHeader = styled(AppBar)`
    height:125px;
    background-color:#00b5a5;
    box-shadow: none;
`

const Header = styled(AppBar)`
    height:220px;
    background-color:#00b5a5;
    box-shadow: none;
`
const Messenger = () => {
    const { Account } = useContext(AccountContext)


    return (

        Account ?
            <>
                <ChatDialog />
                <ChatHeader>
                    <Toolbar>

                    </Toolbar>
                </ChatHeader>

            </>
            :
            <Component>
                <Header>
                    <Toolbar>

                    </Toolbar>
                </Header>
                <LoginDialog />


            </Component>
    )
}
export default Messenger