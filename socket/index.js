import { Server } from "socket.io";
import dotenv from 'dotenv'
dotenv.config();
const PORT = 9000||process.env.PORT
const io = new Server(PORT, {
    cors: {
        origin: '*'
    }
})
let users = []
const getUser = (userId) => {
    
    return users.find(user => user.sub == userId)
}

const addUser = (userData, socketId) => {
    
    !users.some(user => user.sub == userData.sub) && users.push({ ...userData, socketId });
    
    // users.push({...userData, socketId})
}
io.on('connection', (socket) => {
    console.log('user connected')

    socket.on("addUsers", userData => {
        
        addUser(userData, socket.id)
        io.emit("getUsers", users)
    })
    socket.on("sendMessage", data => {
        
        const user = getUser(data.receiverId)
        
        io.to(user?.socketId).emit('getMessage', data)
    })
})



// import { Server } from "socket.io";

// const io = new Server(9000, {
//     cors: {
//         origin: 'http://localhost:3000'
//     }
// })

// io.on("connection", (socket)=>{
//     console.log("aab connect hua hai")
//     socket.on("timepass",userData=>{
//         console.log(userData)
//         io.emit("timepassUser","users")
//     })

// })
