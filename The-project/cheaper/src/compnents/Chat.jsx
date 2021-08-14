import React, { useState, useEffect } from "react";
import io from 'socket.io-client'
import {Paper, Drawer, SwipeableDrawer, Button, Box} from '@material-ui/core'
import '../App.css'
import SendIcon from '@material-ui/icons/Send';
const socket = io('http://localhost:7000')
// const userName = 'User '+parseInt(Math.random()*10)

const Chat = (props) => {
    const [message, setMessage] = useState('')
    const [chat, setChat] = useState([])
    const userName = props.name
  
    useEffect(() => {
      socket.on('message', payload => {
        setChat([...chat, payload])
      })
    })
  
    const sendMessage = (e) => {
      e.preventDefault();
      console.log(message)
      socket.emit('message',{userName,message})
      setMessage('')
    };
    return (
        <div>
             <h1 style={{textAlign:"center"}}>Chat Now..</h1>
    
    <Paper elevation={3} style={{width:"400px", height:"400px", backgroundColor:"#e57373", margin: "0px auto", padding:"3px"}}>

      {chat.map((payload, index)=>{
      return(
        // <h3 key={index}>{payload.userName}: <span>{payload.message}</span></h3>
        <>
       
      
        <Box  style={{backgroundColor: "#ffebee", borderRadius: "20px", width:"200px", height:"30px", marginTop:"5px", padding:"5px"}}>
        <span style={{marginRight: "3px", fontWeight:"bold"}}>{payload.userName}:</span>
            {payload.message}
        </Box>

        </>
      )
    })}
      
      </Paper>
    
      <Paper elevation={3} style={{width:"400px",  backgroundColor:"#e57373", margin: "0px auto", padding:"3px"}}>
            <form onSubmit={sendMessage} style={{margin: "0px auto",  textAlign:"center"}}>
            <input type="text" name="message"
            placeholder='Type a message...'
            value={message}
            onChange={(e)=>{setMessage(e.target.value)}}
            required
            style={{width:"300px", height:"30px"}}></input>
            {/* <button type='submit'>Send</button> */}
            <Button type="submit" variant="outlined" startIcon={<SendIcon />}>
                
                </Button>
            </form>
    </Paper>
            
        </div>
    )
}

export default Chat
