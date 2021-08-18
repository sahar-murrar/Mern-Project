import React from 'react'
import {useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import { Link, navigate } from '@reach/router';
import {

    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });


const ViewSupermarketDetails = (props) => {
    const [pname, setPname] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [allProducts1, setAllProducts1] = useState([]);
    var supermarkets= props.allUsers.filter(user => (user.role === "admin" ));
    const classes = useStyles();

    const checkName=(currentName)=>{
        if(currentName === props.name){
            return true
        }
        else{
            return false
        }

    }

    const nav =()=>{
        console.log(pname)
        console.log(props.allProducts)
        var products_name= props.allProducts.filter(product => (product.productName === pname && product.supermarketName===props.name));
        console.log(products_name)
        setAllProducts1(products_name)
        setLoaded(true)

    }
    
  const thankyou=()=>{
    navigate("/thankyou/"+props.username)
  }

    return (
        <div>
              <ul style={{listStyleType:"none",margin:"0px",padding:"0px",backgroundColor:"black",overflow:"hidden", height: "50px"}}>
   <div style={{display:"flex"}}>
     <Link to={"/user/"+props.username} style={{ textDecoration: "none"}}> <h2 style={{color:"white"}}>Cheaper</h2></Link>

   <div style={{display:"flex", justifyContent:"space-between"}}>
   <h4 style={{color:"white", marginLeft:"10px"}}>Welcome, {props.username} | </h4>
   <h4> <Link style={{color:"white",textDecoration:"none"}} to="/"><li className="nav-item nav-link" style={{display:"inline"}}>  | Logout | </li></Link></h4>
   <h4> <Link style={{color:"white",textDecoration:"none"}} to={"/chatWith/"+props.username}><li className="nav-item nav-link" style={{display:"inline"}}>  | Chat with {props.name} Supermarket  </li></Link></h4>
 

   </div>
   


   </div>
  
    </ul>
          <div style={{display:"flex"}}>
          <h1> Welcome to  {props.name} Supermarket page</h1>
          <div>
          <Button variant="outlined" startIcon={<SearchIcon/>} onClick={nav}></Button>
          <InputLabel>Search ...</InputLabel>
          <OutlinedInput type="text" onChange={(e)=>setPname(e.target.value)} value={pname}/>

          </div>
         
        </div> 
         
              
         <>  
    

            {supermarkets.map((market) => (
               
                    <>
                {market.name === props.name ?
                    <div>
                    
                    {props.allProducts.map((product) => {
                        return <div>
                           
                            { checkName(product.supermarketName) ?
                            <div>
                            <Card className={classes.root} style={{width:"300px"}}> 
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image={`../../img/${product.img}`}
                            title="Contemplative Reptile"
                            style={{height:"260px"}}
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            {product.productName}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            price: {product.price}
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <button onClick={thankyou}>Order Now</button>
                        </CardActions>
                        </Card>
                        <br></br>
                            </div>
                            :null }
                            </div>

                    })}
                  </div>


                   
                
                :null}
                </>
               
              
            ))}
            </>

            {loaded ? 
            <h3 style={{color:"red"}}>Search results: </h3>
            :null}

<div style={{display:"flex"}}>
          {loaded &&  allProducts1.map((product)=>{
                    
                return(
                  
                    <>
            
                   <Card className={classes.root} style={{width:"300px"}}> 
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image={`../../img/${product.img}`}
                            title="Contemplative Reptile"
                            style={{height:"260px"}}
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            {product.productName}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            price: {product.price}
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <button onClick={thankyou}>Order Now</button>
                        </CardActions>
                        </Card>
                      <br>
                     </br>

                    
                     </>
                    
             
                )
                
                })}


          </div>

          <ul style={{listStyleType:"none",margin:"0px",padding:"0px",backgroundColor:"black",overflow:"hidden",  position:"relative",top:"95px"}}>

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

export default ViewSupermarketDetails
