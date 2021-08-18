
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {Button} from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {useState, useEffect} from 'react';
import {Link, navigate} from '@reach/router'
import axios from 'axios';
import AddIcon from '@material-ui/icons/Add';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ViewListRoundedIcon from '@material-ui/icons/ViewListRounded';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import EditButton from '../EditButton'
import DeleteButton from '../DeleteButton';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  const useStyles1 = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  


const SuperMarketHome = (props) => {

  const [pname, setPname] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [allProducts1, setAllProducts1] = useState([]);
  const [products, setProducts] = useState([]);


    const classes = useStyles();
    const classes1 = useStyles1();

      const addProductForm=()=>{
          navigate("/addProduct/"+props.name)
      }
      const viewOrders =()=>{
        navigate("/orders")
      }
      const viewAllProducts=()=>{
        navigate("/allProducts/"+props.name)
      }
      const nav =()=>{
      
        console.log(pname)
        console.log(props.allProducts)
        var products_name= props.allProducts.filter(product => (product.productName === pname && product.supermarketName===props.name));
        console.log(products_name, "finalll")
        setAllProducts1(products_name)
        setLoaded(true)

      }

      const removeFromDom = (productId) => {
        setProducts(props.allProducts.filter(product => product._id !== productId));
        navigate("/allProducts/"+props.supermarketName);
    }
    return (
        <div>

<div className={classes.root} style={{marginLeft:"10px", marginTop:"10px", backgroundColor:"#fce4ec"}}>
      <AppBar position="static">

        
<ul style={{listStyleType:"none",margin:"0px",padding:"0px",backgroundColor:"black",overflow:"hidden", height: "50px"}}>
   <div style={{display:"flex"}}>
     <Link to="/" style={{ textDecoration: "none"}}> <h2 style={{color:"white"}}>Cheaper</h2></Link>

   <div style={{display:"flex", justifyContent:"space-between"}}>
   <h4 style={{color:"white", marginLeft:"10px"}}>Welcome, {props.name} | </h4>
   <h4> <Link style={{color:"white",textDecoration:"none"}} to="/"><li className="nav-item nav-link" style={{display:"inline"}}>  | Logout | </li></Link></h4>
   <h4> <Link style={{color:"white",textDecoration:"none"}} to={"/chatWith/"+props.name}><li className="nav-item nav-link" style={{display:"inline"}}>  | Open Chat || </li></Link></h4>
   <Button type="submit" variant="outlined" style={{backgroundColor:"#333", hieght:"6px"}} startIcon={<SearchIcon/>} onClick={nav}>
                
            </Button>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e)=>setPname(e.target.value)}
              value={pname}
              style={{border:"4px black solid", }}
            />


  


   </div>
   


   </div>
  
    </ul>
       
      </AppBar>
    </div>
        <div style={{display:"flex"}}>
            <div style={{width:"300px",height:"400px", marginLeft:"10px"}}>
            <ListItem button>
                <ListItemIcon>
                    <ViewListRoundedIcon />
                </ListItemIcon>
                <ListItemText style={{ fontWeight:"bold"}} primary="All Products" onClick={viewAllProducts}/>
                </ListItem>
                <ListItem button>
                <ListItemIcon>
                    <AddIcon />
                </ListItemIcon>
                <ListItemText primary="Add Products" onClick={addProductForm}/>
                </ListItem>
                
                <ListItem button>
                <ListItemIcon>
                    <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Customers Orders" onClick={viewOrders}/>
                </ListItem>
            
              
            </div>



        </div>
        <div>
        
          
          <div>
          {loaded &&  allProducts1.map((product)=>{

                return(
                  
                    <>
                      <Card className={classes1.root}>
                        <CardActionArea>
                            <CardMedia
                            className={classes1.media}
                            image={`../img/${product.img}`}
                            title="Contemplative Reptile"
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

                     {/* <EditButton productId={product._id} successCallback={()=>navigate("/")}/> 
                     <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)}/> */}

                    
                     </>
                    
             
                )
                
                })}


          </div>

    


        </div>


        <ul style={{listStyleType:"none",margin:"0px",padding:"0px",backgroundColor:"black",overflow:"hidden",  position:"relative",top:"100px"}}>

        {/* <div style={{width:"900px", marginRight:"160px", marginTop:"40px",position:"relative",top:"150px", color:"white"}}>
      <h1>About Us</h1>
         <h3 style={{fontWeight:"bold"}}> <span style={{color:"red"}}>Cheaper</span> is a website that aims to save the customer money by providing the customer of the all supermarkets that sell the product s/he want to buy and the customer can choose the product according to the right price and supermarket location</h3>

      </div> */}


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

export default SuperMarketHome
