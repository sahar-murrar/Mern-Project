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
const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  
  export default function BasicTable() {
    const classes = useStyles();
    const [allSuperMarkets, setAllSuperMarkets] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/supermarkets')
            .then(res =>{ 
                setAllSuperMarkets(res.data)
                setLoaded(true);
            });
    }, [])
  
    return (
        <div>
            <form >
            <input type="text" name="search" placeholder="Search.."></input>
            <button type="submit">Search</button>
            </form>
      <TableContainer component={Paper}>
          
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{fontWeight:"bold"}}>supermarket name</TableCell>
              <TableCell style={{fontWeight:"bold"}} align="left">subermarket positin </TableCell>
            
              
            </TableRow>
          </TableHead>
          <TableBody>
            {allSuperMarkets.map((market) => (
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
      </div>
    );
  }