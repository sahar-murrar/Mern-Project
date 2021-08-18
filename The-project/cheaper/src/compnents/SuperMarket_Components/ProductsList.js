import React, { useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import { useEffect} from 'react'
import {Link} from '@reach/router';
import EditButton from '../EditButton'
import DeleteButton from '../DeleteButton';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  
const ProductsList = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const classes = useStyles();
    useEffect (() => {
        axios.get('http://localhost:8000/api/products')
        .then(res=> {
            setProducts(res.data);
            setLoaded(true);
            console.log(props.supermarketName)

        });
    }, [])

    const removeFromDom = (productId) => {
        setProducts(products.filter(product => product._id !== productId));
        navigate("/allProducts/"+props.supermarketName);
    }
    return (
        <div>
     <ul style={{listStyleType:"none",margin:"0px",padding:"0px",backgroundColor:"black",overflow:"hidden", height: "50px"}}>
   <div style={{display:"flex"}}>
     <Link to={"/supermarket/"+props.supermarketName} style={{ textDecoration: "none"}}> <h2 style={{color:"white"}}>Cheaper</h2></Link>

   <div style={{display:"flex", justifyContent:"space-between"}}>
   <h4 style={{color:"white", marginLeft:"10px"}}>Welcome, {props.supermarketName} | </h4>
   <h4> <Link style={{color:"white",textDecoration:"none"}} to="/"><li className="nav-item nav-link" style={{display:"inline"}}>  | Logout | </li></Link></h4>
   <h4> <Link style={{color:"white",textDecoration:"none"}} to={"/chatWith/"+props.supermarketName}><li className="nav-item nav-link" style={{display:"inline"}}>  | Open Chat </li></Link></h4>
 


  


   </div>
   


   </div>
  
    </ul>
            <h1>Your Products List...</h1>
                {products.map((product)=>{
                return <div>
                    {product.supermarketName === props.supermarketName?
                    <>
                  
                    <Card className={classes.root}>
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
                            <Typography variant="body2" color="textSecondary" component="p">
                            price: {product.price}
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <EditButton productId={product._id} successCallback={()=>navigate("/allProducts/"+props.supermarketName)}/> 
                        <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)}/>
                        </CardActions>
                        </Card>
    
                     <br>
                     </br>
                     </>
                    
                     :null
                   
                
                    }
                </div>
                   
                
                })}

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

export default ProductsList
