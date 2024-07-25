import axios from 'axios'
// const url= 'https://chatclone-458j.onrender.com';
const url= 'http://localhost:5500'

export const addUser =async (data)=>{
    try {
        await axios.post(`${url}/add`, data);
    } catch (error) {
       console.log('Error while using API', error.message) 
    }

}

export const getUsers= async()=>{
    try {   
      let response=   await axios.get(`${url}/users`)
      
      return response.data;
    
    } catch (error) {
        console.log("Error during fetching users data",error)
    }
}


export const setConversation = async(data)=>{
   const {receiverId, senderId}= data;
    
    try {
        await axios.post(`${url}/conversation/add`, data);
        
    } catch (error) {console.log("error while calling setConversation api", error.message)
        
    }
}

export const getConversation = async(data)=>{
    
     
     try {
         const response = await axios.post(`${url}/conversation/get`, data);
         return response.data      
     } catch (error) {console.log("error while calling getConversation api", error.message)
         
     }
 }

 export const newMessage = async(data) =>{
    try {
        await axios.post(`${url}/message/add`, data);
    } catch (error) {
        console.log("Error while calling newMessage api", error.message)
    }
 }


 export const getMessage = async(id) =>{
    try {
        let response = await axios.get(`${url}/message/get/${id}`)
        return response.data
    } catch (error) {
        console.log("Error while calling newMessage api", error.message)
    }
 }
 
 export const uploadFile = async(data)=>{
    try {
        console.log("sdf")
        return await axios.post(`${url}/file/upload`,data);

    } catch (error) {
        console.log("Error while calling uploadFile api", error.message)
    }
 }
