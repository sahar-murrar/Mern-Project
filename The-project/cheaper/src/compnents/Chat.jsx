import React, { useState, useEffect } from "react";
import io from 'socket.io-client'
import {Paper, Drawer, SwipeableDrawer, Button, Box} from '@material-ui/core'
import '../App.css'
import SendIcon from '@material-ui/icons/Send';
import {Link} from '@reach/router';
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
            <ul style={{listStyleType:"none",margin:"0px",padding:"0px",backgroundColor:"black",overflow:"hidden", height: "50px"}}>
   <div style={{display:"flex"}}>
     <Link to={""} style={{ textDecoration: "none"}}> <h2 style={{color:"white"}}>Cheaper</h2></Link>

   <div style={{display:"flex", justifyContent:"space-between"}}>
   <h4 style={{color:"white", marginLeft:"10px"}}>Welcome, {props.name} | </h4>
   <h4> <Link style={{color:"white",textDecoration:"none"}} to="/"><li className="nav-item nav-link" style={{display:"inline"}}>  | Logout  </li></Link></h4>
  
 


  


   </div>
   


   </div>
  
    </ul>
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

    <ul style={{listStyleType:"none",margin:"0px",padding:"0px",backgroundColor:"black",overflow:"hidden",  position:"relative"}}>

<div style={{position:"relative", color:"white"}}>
<h1>About Us</h1>
<h3 style={{fontWeight:"bold"}}> <span style={{color:"red"}}>Cheaper</span> is a website that aims to save the customer money by providing the customer of the all supermarkets that sell the product s/he want to buy and the customer can choose the product according to the right price and supermarket location</h3>

</div> 
<br></br>
<br></br>

<div style={{position:"relative", color:"white"}}>
<h1>Contact Us</h1>
<h3 style={{fontWeight:"bold"}}> email: cheaper@gmail.com</h3>
<h3 style={{fontWeight:"bold"}}> phone: 059833747432</h3>
<h3 style={{fontWeight:"bold"}}> facebook: cheaperWebsite</h3>
</div>



</ul>

            
        </div>
    )
}

export default Chat
