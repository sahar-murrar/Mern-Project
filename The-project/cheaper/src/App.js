import './App.css';
import {useState, useEffect } from 'react';
import axios from 'axios';
import {Router,navigate} from '@reach/router'
import { set } from 'mongoose';
import SuperMarketHome from './compnents/SuperMarket_Components/SuperMarketHome';
import CreateProduct from './compnents/SuperMarket_Components/CreateProduct';
import ProductsList from './compnents/SuperMarket_Components/ProductsList';
import EditComponent from './compnents/EditComponent';
import SearchComponent from './compnents/SuperMarket_Components/SearchComponent';
import SuperMarketList from './compnents/User_Components/SuperMarketList';
function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [loaded1, setLoaded1] = useState(false);
  var supermarketName="shini"
  
  useEffect (() => {
      axios.get('http://localhost:8000/api/products')
      .then(res=> {
        setAllProducts(res.data);
          setLoaded1(true);

      });
  }, [])



  return (
    <div className="App">
      <button onClick={(e)=>navigate("/supermarket")}>supermarket home</button>
      <button onClick={(e)=>navigate("/user")}>user home</button>
     
      <Router>
      <SuperMarketHome supermarketName={supermarketName} allProducts={allProducts} path="/supermarket"/>  
        <CreateProduct path="/addProduct"/>
        <ProductsList path="/allProducts/:supermarketName"/>
        <EditComponent path="/edit/:id"/>
        <SearchComponent path="/searchProduct/:name"/>
        <SuperMarketList path="/user" />
      </Router>
     
    </div>
  );
}

export default App;
