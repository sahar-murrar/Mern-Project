import React, { useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import { useEffect} from 'react'
import {Link} from '@reach/router';
import EditButton from '../EditButton'
import DeleteButton from '../DeleteButton';
const ProductsList = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
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
            <h1>hello</h1>
                {products.map((product)=>{
                return <div>
                    {product.supermarketName === props.supermarketName?
                    <>
                     <p>Product Name: {product.productName}</p>
                     <p>Product Price: {product.price}</p>
                     <p>Supermarket Name: {product.supermarketName}</p>
                     <img src={`../img/${product.img}`} alt="img"/> <br>
                     </br>

                     <EditButton productId={product._id} successCallback={()=>navigate("/allProducts/"+props.supermarketName)}/> 
                     <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)}/>

                     <p>--------------------------------------------------</p>
                     </>
                    
                     :null
                   
                
                    }
                </div>
                   
                
                })}
            
        </div>
    )
}

export default ProductsList
