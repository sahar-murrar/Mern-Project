
import React, {useState,useContext} from 'react';
import {Link} from '@reach/router';



   
    
const Home = ()=>{
 

  

  return(
      <div style={{ 
        backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/002/984/599/non_2x/abstract-blur-and-defocused-supermarket-for-background-free-photo.jpg")` ,height:"750px",width:"1520px"  }}
      
      
      >

<ul style={{listStyleType:"none",margin:"0px",padding:"0px",backgroundColor:"#333",overflow:"hidden"}}>
    <Link style={{color:"white",padding:"14px 16px",textAlign:"center",textDecoration:"none"}} to="/"><li className="nav-item nav-link" style={{display:"inline"}}>  Home </li></Link>
    <Link style={{color:"white",padding:"14px 16px",textAlign:"center",textDecoration:"none"}} to="/login"><li className="nav-item nav-link" style={{display:"inline"}}>Login</li></Link>  
    <Link style={{color:"white",padding:"100px 100px",textAlign:"center",textDecoration:"none"}} to="/register"><li className="nav-item nav-link" style={{display:"inline"}}> Register</li> </Link> 
    </ul>

{/*     
       <div style={{position:"fixed",top:"50%",left:"30%",backgroundColor:"#333",color:"white",width:"700px",borderRadius:"5px",padding:"5px"}}>
         <h1>About Us</h1>
         <h3 style={{fontWeight:"bold"}}> <span style={{color:"blue"}}>Cheaper</span> is a website that aims to save the customer money by providing the customer of the all supermarkets that sell the product s/he want to buy and the customer can choose the product according to the right price and supermarket location</h3>
         </div>   
         */}
  
        
    </div>
         
     
  )
}

export default Home;