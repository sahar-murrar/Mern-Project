import './App.css';
import {useState, useEffect } from 'react';
import axios from 'axios';
import {Router,navigate} from '@reach/router'
import { set } from 'mongoose';
import SuperMarketHome from './compnents/SuperMarket_Components/SuperMarketHome';
import CreateProduct from './compnents/SuperMarket_Components/CreateProduct';
import ProductsList from './compnents/SuperMarket_Components/ProductsList';
import EditComponent from './compnents/EditComponent';
import UserHome from './compnents/User_Components/UserHome';
import ViewSupermarketDetails from './compnents/User_Components/ViewSupermarketDetails';
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
        <UserHome path="/user" />
        <ViewSupermarketDetails path="/supermarketDetails/:name"/>
      </Router>
     
    </div>
  );
}

export default App;
