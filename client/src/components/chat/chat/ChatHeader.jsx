import {Box, Typography, styled} from '@mui/material'
import { Search, MoreVert } from '@mui/icons-material'
import { defaultProfilePicture } from '../../../constants/data'
import { useContext } from 'react'
import { AccountContext } from '../../../contextAPI/AccountProvider'
const Header = styled(Box)`
    height:44px;
    background:#ededed;
    display: flex;
    padding: 8px 16px;
    align-items: center;
`
const Image = styled('img')({
    height:40,
    width:40,
    borderRadius:'50%'
})

const Name = styled(Typography)`
    margin-left:12px !important;
`
const Status = styled(Typography)`
    margin-left:12px !important;
    font-size: 12px;
    color: rgb(0,0,0,0.6)
`
const RigthContainer = styled(Box)`
    margin-left: auto;
    &>svg{
        padding:8px;
        font-size:24px;
        color:black;
    }
`


const ChatHeader =({person})=>{
    const {activeUsers} = useContext(AccountContext)
    activeUsers&&console.log(activeUsers.map((e)=>e.sub))
    return(
        <Header>
            <Image src={person.picture} alt="dp" />
            <Box>
                <Name>{person.name}</Name>
                {activeUsers.find(e=>e.sub===person.sub)?
                <Status>online</Status>
            :<Status>Offline</Status>
            }
            </Box>
            <RigthContainer>
                <Search/>
                <MoreVert/>
            </RigthContainer>
        </Header>
    )
}
export default ChatHeader