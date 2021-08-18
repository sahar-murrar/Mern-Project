import React from 'react'
import { Link, navigate } from '@reach/router';
const ThankYou = (props) => {
    return (
        <div style={{height:"660px"}}>
                <ul style={{listStyleType:"none",margin:"0px",padding:"0px",backgroundColor:"black",overflow:"hidden", height: "50px"}}>
            <div style={{display:"flex"}}>
                <Link to={"/user/"+props.name} style={{ textDecoration: "none"}}> <h2 style={{color:"white"}}>Cheaper</h2></Link>

            <div style={{display:"flex", justifyContent:"space-between"}}>
            <h4 style={{color:"white", marginLeft:"10px"}}>Welcome, {props.name} | </h4>
            <h4> <Link style={{color:"white",textDecoration:"none"}} to="/"><li className="nav-item nav-link" style={{display:"inline"}}>  | Logout | </li></Link></h4>
            <h4> <Link style={{color:"white",textDecoration:"none"}} to={"/chatWith/"+props.name}><li className="nav-item nav-link" style={{display:"inline"}}>  | Open Chat </li></Link></h4>
            

            </div>
            


            </div>
            
                </ul>
            <h1>Thank You {props.name} for Ordering, we will contact you ASAP.</h1>

            <ul style={{listStyleType:"none",margin:"0px",padding:"0px",backgroundColor:"black",overflow:"hidden",  position:"relative",top:"312px"}}>

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

export default ThankYou
