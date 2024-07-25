import {Search} from '@mui/icons-material'
import { InputBase, Box, styled } from '@mui/material'
import { getUsers } from '../../../Service/api'
import { useEffect, useState } from 'react'
const Component = styled(Box)`
    background:#fff;
    height:45px;
    border-bottom:1px solid #F2F2F2;
    display:flex;
    align-items:center;
    `
const Wrapper = styled(Box)`
    background-color:#f0f2f5;
    position:relative;
    margin:0 13px;
    width:100%;
    border-radius:10px;
`
const Icon = styled(Box)`
    position:absolute;
    height:100%;
    padding:6px 9px;
    color:#919191;
`

const InputField = styled(InputBase)`
    width:100%;
    padding:16px;
    height:15px;
    padding-left:65px;
    font-size:14px;
`
const Searchvalue=({setText, text})=>{
    const [response, setResponse]=useState()
    // const [search, setSearch] = useState()

    useEffect(()=>{
        const  fetchData=async()=>{
           let data=  await getUsers()
           setResponse(data)
           
        }
        fetchData();
    } ,[])  

   !text&&setText(response)

    const Searchresult=(e)=>{
        let searchresult;
       if(response){searchresult= response.filter(data=>data.name.toUpperCase().includes(e.target.value.toUpperCase()))
        setText(searchresult) 
    }
    else{
        searchresult = null;
    }

    }
    
    return(
        <Component>
            <Wrapper>
                <Icon>
                    <Search fontSize='small'/>
                    
                </Icon>
                <InputField placeholder='Search or start new chat' onChange={(e)=>Searchresult(e)}/>
                
                
                
                
            </Wrapper>
        </Component>
    )
}
export default Searchvalue