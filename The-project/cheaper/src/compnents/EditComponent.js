import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import AddProductForm from './SuperMarket_Components/AddProductForm';
const EditComponent = (props) => {
    const {id} = props;
    const [error, setError]= useState([]);
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
                console.log(product)
            })
    }, [id])


    const editProduct = product => {
        axios.put('http://localhost:8000/api/product/' + id, product)
            .then(res=>{
                navigate("/");
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                    console.log("I'm here")
                }
                // Set Errors
                setError(errorArr);
            })     
            console.log(product)
    }

    return (
        <div>
          
            { loaded && 
            <AddProductForm  type="" onSubmitProp={editProduct} initialName={product.productName}  initialPrice={product.price} initialImg={product.img}  name_error={error}/>
            }
            
            
        </div>
    )
}

export default EditComponent