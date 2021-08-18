import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import {

  FormControl,
  InputLabel,
  OutlinedInput,
  Button
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
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


  export default function BasicTable(props) {
    const [pname, setPname] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [allProducts1, setAllProducts1] = useState([]);
    const classes = useStyles();
    var supermarkets= props.allUsers.filter(user => (user.role === "admin" ));

    const nav =()=>{
     
      console.log(pname)
      console.log(props.allProducts, "zfftttttt")
      var products_name= props.allProducts.filter(product => (product.productName === pname ));
      console.log(products_name)
      setAllProducts1(products_name)
      console.log(allProducts1, "ppppp")
      setLoaded(true)
  
  }

  const thankyou=()=>{
    navigate("/thankyou/"+props.name)
  }
  
    return (
        <div>
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
     
      <Button variant="outlined" startIcon={<SearchIcon/>} onClick={nav}></Button>
      <InputLabel>Search ...</InputLabel>
      <OutlinedInput type="text" onChange={(e)=>setPname(e.target.value)} value={pname}/>
      <br></br>
      <TableContainer component={Paper} style={{width:"800px"}}>
          
        <Table className={classes.table} aria-label="simple table" >
          <TableHead>
            <TableRow>
              <TableCell style={{fontWeight:"bold"}}>supermarket name</TableCell>
              <TableCell style={{fontWeight:"bold"}} align="left">supermarket location </TableCell>
            
              
            </TableRow>
          </TableHead>
          <TableBody>
            {supermarkets.map((market) => (
         
              <TableRow key={market._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/supermarketDetails/"+market.name+"/"+props.name} style={{textDecoration:"none", fontWeight: "bold"}}> {market.name}</Link>
                 
                </TableCell>
                <TableCell align="left">{market.location}</TableCell>
               
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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
                            image={`../img/${product.img}`}
                            title="Contemplative Reptile"
                            style={{height:"260px"}}
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            {product.productName}
                            </Typography>
                            <Typography gutterBottom variant="body2" component="h3" style={{fontWeight:"bold"}}>
                            Supermarket: {product.supermarketName}
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
    );
  }