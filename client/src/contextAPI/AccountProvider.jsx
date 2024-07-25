import { createContext, useState, useRef, useEffect } from "react";
import { io } from 'socket.io-client';
export const AccountContext =  createContext(null)


const  AccountProvider=({children})=>{
        const [Account, setAccount] = useState();
        const [person, setPerson] = useState()
        const [activeUsers, setActiveUsers] = useState([])
        const[newMessageFlag, setNewMessgeFlag] = useState(false)
        const socket = useRef();
        
        useEffect(()=>{
                socket.current = io('ws://localhost:9000')
        },[])

return(
        
        <AccountContext.Provider value={{Account, setAccount, person, setPerson, socket, activeUsers, setActiveUsers, setNewMessgeFlag, newMessageFlag}}>
                {children}
        </AccountContext.Provider>

    )
}
export default AccountProvider