
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

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {useState, useEffect} from 'react';
import {navigate} from '@reach/router'
import axios from 'axios';
import AddIcon from '@material-ui/icons/Add';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ViewListRoundedIcon from '@material-ui/icons/ViewListRounded';
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


const SuperMarketHome = (props) => {
    
    const classes = useStyles();

      const addProductForm=()=>{
          navigate("/addProduct")
      }
      const viewOrders =()=>{
        navigate("/orders")
      }
      const viewAllProducts=()=>{
        navigate("/allProducts/"+props.supermarketName)
      }
    return (
        <div>

<div className={classes.root} style={{marginLeft:"10px", marginTop:"10px", backgroundColor:"#fce4ec"}}>
      <AppBar position="static">
        <Toolbar style={{ backgroundColor:"#fce4ec", color:"black"}}>
        
          <h3 variant="h6" noWrap>
            Cheaper
          </h3>
          <h4 style={{marginLeft:"500px"}}>Welcome, Bravo</h4>
          <div className={classes.search} style={{marginLeft:"400px"}}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
        <div style={{display:"flex", backgroundColor:"#fce4ec"}}>
            <div style={{width:"300px", backgroundColor:"#fce4ec", marginLeft:"10px"}}>
            <ListItem button>
                <ListItemIcon>
                    <ViewListRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="All Products" onClick={viewAllProducts}/>
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
                <ListItem button>
                <ListItemIcon>
                    <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" onClick={navigate("/")}/>
                </ListItem>
              
            </div>

            <h2 style={{backgroundColor:"#ef9a9a", borderRadius:"20px", textAlign:"center" ,height:"40px", marginLeft:"130px"}}>Market your products, earn more for a better life</h2>




        </div>
        
      
   

        </div>
    )
}

export default SuperMarketHome
