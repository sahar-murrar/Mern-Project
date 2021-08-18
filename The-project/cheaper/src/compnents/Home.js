import React, {useState,useContext} from 'react';
import {Link} from '@reach/router';



   
    
const Home = ()=>{
 

  

  return(
      <div 
      
      
      >

<ul style={{listStyleType:"none",margin:"0px",padding:"0px",backgroundColor:"black",overflow:"hidden", height: "50px"}}>
   <div style={{display:"flex"}}>
     <Link to="/" style={{ textDecoration: "none"}}> <h2 style={{color:"white"}}>Cheaper</h2></Link>

   <div>

   <Link style={{color:"white",padding:"14px 16px",textAlign:"center",textDecoration:"none"}} to="/"><li className="nav-item nav-link" style={{display:"inline"}}>  Home </li></Link>
    <Link style={{color:"white",padding:"14px 16px",textAlign:"center",textDecoration:"none"}} to="/login"><li className="nav-item nav-link" style={{display:"inline"}}>Login</li></Link>  
    <Link style={{color:"white",padding:"100px 100px",textAlign:"center",textDecoration:"none"}} to="/register"><li className="nav-item nav-link" style={{display:"inline"}}> Register</li> </Link> 



   </div>
   


   </div>
  
    </ul>

    <h1 style={{fontWeight:"bold", marginTop:"100px"}}>Use Cheaper, make your life easier! </h1>


      <ul style={{listStyleType:"none",margin:"0px",padding:"0px",backgroundColor:"black",overflow:"hidden",  position:"relative",top:"210px"}}>

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

export default Home;