import './App.css';
import {useState } from 'react';
import axios from 'axios';
import {Router,navigate} from '@reach/router'
import { set } from 'mongoose';
import SuperMarketHome from './compnents/SuperMarket_Components/SuperMarketHome';
import CreateProduct from './compnents/SuperMarket_Components/CreateProduct';
import ProductsList from './compnents/SuperMarket_Components/ProductsList';
import EditComponent from './compnents/EditComponent';
import SearchComponent from './compnents/SuperMarket_Components/SearchComponent';
function App() {
  var supermarketName="bravo"

  return (
    <div className="App">

  
      <SuperMarketHome supermarketName={supermarketName}/>
      <Router>
        <CreateProduct path="/addProduct"/>
        <ProductsList path="/allProducts/:supermarketName"/>
        <EditComponent path="/edit/:id"/>
        <SearchComponent path="/searchProduct/:name"/>
      </Router>
     
    </div>
  );
}

export default App;
