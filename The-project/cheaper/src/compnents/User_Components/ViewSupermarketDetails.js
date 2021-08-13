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
import { Link } from '@reach/router';
import SearchIcon from '@material-ui/icons/Search';
import {

    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@material-ui/core';
const ViewSupermarketDetails = (props) => {
    const [pname, setPname] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [allProducts1, setAllProducts1] = useState([]);

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

    return (
        <div>
           <Link to={"chatWith/"+props.name}>Chat with {props.name} Supermarket </Link>
          
          <Button variant="outlined" startIcon={<SearchIcon/>} onClick={nav}></Button>
          <InputLabel>Search ...</InputLabel>
          <OutlinedInput type="text" onChange={(e)=>setPname(e.target.value)} value={pname}/>
              
            <h1> Welcome to  {props.name} Supermarket page</h1>

            {props.allSuperMarkets.map((market) => (
               
                    <>
                {market.supermarketName === props.name ?
                    <div>
                    
                    {props.allProducts.map((product) => {
                        return <div>
                           
                            { checkName(product.supermarketName) ?
                            <>
                            <span>here3</span>
                            <p> Product name: {product.productName}</p>
                            <p> Product Price: {product.price}</p>
                            <img src={`../img/${product.img}`} alt="img"/> 
                            <p>--------------------------------------</p>
                            </>
                            :null }
                            </div>

                    })}
                  </div>


                   
                
                :null}
                </>
               
              
            ))}

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

        
    )
}

export default ViewSupermarketDetails
