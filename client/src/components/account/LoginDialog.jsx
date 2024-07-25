import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material"
import { qrCodeImage } from '../../constants/data';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useContext } from "react";
import { AccountContext } from "../../contextAPI/AccountProvider";
import { addUser } from "../../Service/api";


const dialogStyle = {
    height: '96%',
    marginTop: '12%',
    width: '60%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    overflow: 'hidden'
}
const Component = styled(Box)`
 display:flex;
 
`
const Container = styled(Box)`
    padding: 56px 0 56px 56px
`
const QRCode = styled('img')({
    height: 264,
    width: 264,
    margin: '50px 0 0 50px'
});
const Title = styled(Typography)`
    font-size: 26px;
    color:#525252;
    font-weight:300: 300;
    font-family: inherit;
    margin-bottom:25px;
`
const StyledList = styled(List)`
    &>li {
        padding:0,
        margin-top:15px;
        font-size:18px;
        line-heigth:28px;
        color: #4a4a4a;
    }
`


const LoginDialog = () => {
    const { setAccount } = useContext(AccountContext)
    const onLoginSuccess =async (res) => {
        const decoded = jwtDecode(res.credential)
        setAccount(decoded)
        await addUser(decoded)
    }
    const onLoginError = () => {
        console.log("error")
    }

    // Twillo
    // const accountSid = 'AC45a7322d43315ffe0aa6fbaa2f50f774';
    // const authToken = '10ddfdb1c36b0186638f7aaf8e6a27ee';
    // const client = require('twilio')(accountSid, authToken);

    // client.messages
    //     .create({
    //         body: 'This is a trial message ',
    //         from: '+17176198271',
    //         to: '+919649215986'
    //     })
    //     .then(message => console.log(message.sid))
    //     .done();



    return (
        <Dialog
            open={true}
            PaperProps={{ sx: dialogStyle }}
            hideBackdrop={true}>
            <Component>
                <Container>
                    <Title>
                        To use WhatsApp on your computer:
                    </Title>
                    <StyledList>
                        <ListItem>1. Open WhatsApp on your phone</ListItem>
                        <ListItem>2. Tap Menu Settings and select WhatpsApp Web</ListItem>
                        <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                    </StyledList>
                </Container>


                <Box style={{ position: 'relative' }}>
                    <QRCode src={qrCodeImage} alt='qr code' />
                    <Box style={{ position: 'absolute', top: '50%', transform: 'translateX(25%)' }}>
                        <GoogleLogin
                            onSuccess={onLoginSuccess}
                            onError={onLoginError}
                        />
                        {/* <button onClick={}>SMS</button> */}

                    </Box>
                </Box>
            </Component>
        </Dialog>
    )
}
export default LoginDialog