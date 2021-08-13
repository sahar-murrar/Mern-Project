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
import { Link } from '@reach/router';
import {

  FormControl,
  InputLabel,
  OutlinedInput,
  Button
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });


  
  export default function BasicTable(props) {
    const [pname, setPname] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [allProducts1, setAllProducts1] = useState([]);
    const classes = useStyles();
   

    const nav =()=>{
     
      console.log(pname)
      console.log(props.allProducts)
      var products_name= props.allProducts.filter(product => (product.productName === pname ));
      console.log(products_name)
      setAllProducts1(products_name)
      setLoaded(true)
  
  }
  
    return (
        <div>
          
      <Button variant="outlined" startIcon={<SearchIcon/>} onClick={nav}></Button>
      <InputLabel>Search ...</InputLabel>
      <OutlinedInput type="text" onChange={(e)=>setPname(e.target.value)} value={pname}/>
      <TableContainer component={Paper}>
          
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{fontWeight:"bold"}}>supermarket name</TableCell>
              <TableCell style={{fontWeight:"bold"}} align="left">subermarket positin </TableCell>
            
              
            </TableRow>
          </TableHead>
          <TableBody>
            {props.allSuperMarkets.map((market) => (
              <TableRow key={market._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/supermarketDetails/"+market.supermarketName} style={{textDecoration:"none", fontWeight: "bold"}}> {market.supermarketName}</Link>
                 
                </TableCell>
                <TableCell align="left">{market.location}</TableCell>
               
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {loaded ? 
          <h3>Search results: </h3>
          :null}

      <div>
          {loaded &&  allProducts1.map((product)=>{

                return(
                  
                    <>
                  
                     <p>Product Name: {product.productName}</p>
                     <p>Product Price: {product.price}</p>
                     <p>Supermarket Name: {product.supermarketName}</p>
                     <img src={`../img/${product.img}`} alt="img"/> <br>
                     </br>

                     <p>--------------------------------------------------</p>
                     </>
                    
             
                )
                
                })}


          </div>
      </div>
    );
  }