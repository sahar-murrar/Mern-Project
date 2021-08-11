import React from 'react'
import axios from 'axios';
import { Button } from '@material-ui/core';
const DeleteButton= props => {
    const { productId, successCallback } = props;
    const deleteProduct = ()=> {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res=>{
                successCallback();
            })
    }
   
    return (
        <Button variant="contained" color="secondary" onClick={deleteProduct}>
            Delete
        </Button>
    )
}
export default DeleteButton;