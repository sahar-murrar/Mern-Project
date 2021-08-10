import logo from './logo.svg';
import './App.css';
import {useState } from 'react';
import axios from 'axios';
import {Router,navigate} from '@reach/router'
import Home from './compnents/Home';
import { set } from 'mongoose';
import malak from './img/WANTED.JPG';
function App() {

  // const [img, setImg]= useState("");
  const [product, setProduct]= useState({});

const x = "name";
const y = 22;
const z = "SSS";
// var p = {};
var zft;
var img=""
  const handel =(e)=>{
    e.preventDefault()
    console.log(img,"########")
    // setImg(im)
    console.log(img,"%%%%%%%%")
    var p = {img}
    console.log(p, "oooooo")
    setProduct(p)
    console.log(product)
    axios.post('http://localhost:8000/api/product/new',p)
            .then(res=>{
              console.log(res.data)
              setProduct(res.data)
            })
            zft=img;
            console.log(zft, "GFFFFFFFFFFFFFFFFFFD")
    navigate("/hello/"+product._id)

  }
  const onChange = (event) => {
    const value = event.target.value;
  
    // this will return C:\fakepath\somefile.ext
    console.log(value);
  
    const files = event.target.files;
  
    //this will return an ARRAY of File object
    console.log(files[0].name);
   img=(files[0].name);
    console.log(img,"@@@@@@@@@")

  }
  return (
    <div className="App">

<img src={`./img/${img}`} />                       

  <form onSubmit={handel}> 

      <input
            type="file"
            // name=""
            // value={this.state.pagetwodata}
            onChange={(e)=>{onChange(e)}}
          />

      <input type="submit"></input>    
      </form>


      <Home />


    </div>
  );
}

export default App;
