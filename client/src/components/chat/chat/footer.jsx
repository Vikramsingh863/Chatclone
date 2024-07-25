import { Box, InputBase, styled } from '@mui/material'
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import { AttachFile, Mic } from '@mui/icons-material';
import { useState } from 'react';
import { useEffect ,useRef} from 'react';
import { uploadFile } from '../../../Service/api';
import SendIcon from '@mui/icons-material/Send';
const Container= styled(Box)`
 
    height: 55px;
    background:#ededed;
    display:flex;
    width:100%;
    
    align-items:center;
    padding: 0 15px;
    &> * {
        margin:5px;
        color: #919191;
    }
`
const ClipIcon = styled(AttachFile)`
    transform:rotate()
`
const Search = styled(Box)`
    background-color: #FFFFFF;
    border-radius:18px;
    width: calc(94% - 100px);
    
    
`
const InputField = styled(InputBase)`
width:100%;
padding:20px;
height:20px;
padding-left:25px;
font-size:14px;
`


const Footer = ({sendText, setValue, value ,file, setFile, setImage}) => {
const inputref = useRef(null)

// useEffect(()=>{
//     sendText(e)
// },[])
  

useEffect(()=>{
    const getImage =async ()=>{
        if(file){
            const data = new FormData();
            data.append("name",file.name);
            data.append("file",file)

            
          let response=   await uploadFile(data);
          setImage(response.data);
        }
        
    }
    getImage()
},[file])


    const onFileChange=(e)=>{
        console.log(e.target.files)
        setFile(e.target.files[0]);
        setValue(e.target.files[0].name)
    }

   const handleSendText=()=>{
    
    setValue(inputref.current.getElementsByTagName('input')[0].value)
    sendText(true)
    
   }
    
    return (
        <Container>

            <EmojiEmotionsOutlinedIcon />
            <label htmlFor="fileInput">
            <AttachFile />
            </label>
            
            <input type="file"
            style={{display:'none', cursor:'pointer'}}
            id= "fileInput" 
            onChange = {(e)=> onFileChange(e)}
            
            
            />
            
            <Search>
                <InputField placeholder='Type a message' 
                onChange={(e)=>setValue(e.target.value)}
                onKeyDown={(e)=>sendText(e)}
                value={value}
                ref={inputref}
                />
            </Search>
            <SendIcon onClick={handleSendText}/>
            <Mic />
        </Container>
    )
}
export default Footer