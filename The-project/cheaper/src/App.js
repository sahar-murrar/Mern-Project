import './App.css';
import {useState } from 'react';
import axios from 'axios';
import {Router,navigate} from '@reach/router'
import { set } from 'mongoose';
import SuperMarketHome from './compnents/SuperMarket_Components/SuperMarketHome';
import CreateProduct from './compnents/SuperMarket_Components/CreateProduct';
import ProductsList from './compnents/SuperMarket_Components/ProductsList';
import EditComponent from './compnents/EditComponent';
function App() {
  var supermarketName="bravo"

  return (
    <div className="App">

  
      <SuperMarketHome supermarketName={supermarketName}/>
      <Router>
        <CreateProduct path="/addProduct"/>
        <ProductsList path="/allProducts/:supermarketName"/>
        <EditComponent path="/edit/:id"/>
      </Router>
     
    </div>
  );
}

export default App;
