import React from 'react'
import {useState, useEffect} from 'react';
import {navigate} from '@reach/router'
import axios from 'axios';
const SearchComponent = (props) => {
    const [product, setProduct] = useState({});
  const [pname, setPname] = useState("");
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + props.name)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
                console.log(product)
            })
    }, [props.name])

    return (
        <div>
            
        </div>
    )
}

export default SearchComponent
