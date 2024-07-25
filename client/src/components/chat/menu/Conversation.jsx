import { useEffect, useState } from "react"
import { getUsers } from "../../../Service/api.js"
import { UserConversations } from "./userConversations.jsx"
import { Box, Divider, styled } from "@mui/material"
import { useContext } from "react"
import { AccountContext } from "../../../contextAPI/AccountProvider"



const Conversations =({text})=>{
const [response, setResponse]=useState()
const {Account, socket, setActiveUsers, person}= useContext(AccountContext)
person&&console.log(person)

useEffect(()=>{
    const  fetchData=async()=>{
       let data=  await getUsers()
       
       setResponse(data)
    }
    fetchData();
} ,[text])  
// response&&console.log(response)


const Component = styled(Box)`
    height:81vh;
    overflow:overlay
`
const StyledDivider= styled(Divider)`
    margin:0 0 0 70px;
    background-color: #e9edef;
    opacity:.4;
`
useEffect(()=>{
    
    socket.current.emit('addUsers',Account)
    socket.current.on("getUsers", users=>{
        setActiveUsers(users )
    })
},[person])  
// useEffect(()=>{
//     socket.current.emit('timepass',"golu bhaiya")
// },[person])

//     socket.current.on("timepassUser",user=>{
//         console.log(user)
//     })

    return(
        <Component>
            
         {text&&text.map((res)=>{
            return(
            <>
               { res.sub!==Account.sub&&
                <UserConversations res={res}/>}
                <StyledDivider/>
            </>
            )       
        })} 
        </Component>
    )
}
export default Conversations