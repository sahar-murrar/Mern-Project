import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';
const Home = (props) => {
    const [allAuthors, setAllAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res =>{ 
                setAllAuthors(res.data)
                setLoaded(true);
            });
    }, [])
//     const [img, setImg]= useState("");
//     const [product, setProduct]= useState({});
  
//   const x = "name";
//   const y = 22;
//   const z = "SSS";
//   // var p = {};
  
//     const handel =()=>{
//     //   e.prevenDefault()
//       console.log(img)
//     //   var p = {x,y,z,img}
//     //   setProduct(p)
//     //   console.log(product)
//     //   axios.post('http://localhost:8000/api/product/new', product)
//     //           .then(res=>{
//     //           })

  //  }
    return (
        <div>


          {allAuthors.map((author,i) => (
              <>
              {`../img/${author.img}`}
            <p> {author.productName}</p> 
            <img src={`../img/${author.img}`}/>

            </>
            
          ))}
       

            {/* <form onSubmit={handel}> 

                <input
                type="file"
                // name=""
                // value={this.state.pagetwodata}
                onChange={(e)=>setImg(e.target.value)}
                />

                <input type="submit"></input>    
            </form> */}
{props.img}
<img src={`../img/${props.img}`} />                       
        </div>
    )
}

export default Home
